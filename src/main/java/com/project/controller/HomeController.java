package com.project.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.model.DocumentUpload;
import com.project.model.Employee;
import com.project.model.Locations;
import com.project.model.Role;
import com.project.model.User;
import com.project.model.UserLogin;
import com.project.repository.DocumentUploadRepository;
import com.project.repository.LocationsRepository;
import com.project.repository.RoleRepository;
import com.project.repository.UserLoginRepository;
import com.project.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class HomeController {
	
	@Value("${file.upload-dir}")
    private String uploadDir;
	
	@Autowired
	private UserRepository userRepositiory;
	
	@Autowired
	private UserLoginRepository userLoginRepository; 
	
	@Autowired
	private DocumentUploadRepository documentUploadRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private LocationsRepository locationRepository;
	
	@GetMapping("users")
	public List<User> getUsers(){
		return this.userRepositiory.findAll();
	}
	
	@PostMapping("addUser")
	public User addUser(@RequestBody JsonNode json){
		System.out.println("Successfully....!" + json);
		ObjectMapper objectMapper = new ObjectMapper();
		if(!json.isEmpty()) {
			User user =  objectMapper.convertValue(json, User.class);
			return userRepositiory.save(user);
		}
		return null;
	}
	
	@PostMapping("addRole")
	public Role addRole(@RequestBody JsonNode json){
		System.out.println("Successfully....!" + json);
		ObjectMapper objectMapper = new ObjectMapper();
		if(!json.isEmpty()) {
			Role role =  objectMapper.convertValue(json, Role.class);
			return roleRepository.save(role);
		}
		return null;
	}
	
	@PostMapping("addLocation")
	public Locations addLocation(@RequestBody JsonNode json){
		System.out.println("Successfully....!" + json);
		ObjectMapper objectMapper = new ObjectMapper();
		if(!json.isEmpty()) {
			Locations locations =  objectMapper.convertValue(json, Locations.class);
			return locationRepository.save(locations);
		}
		return null;
	}
	
	@GetMapping("roles")
	public List<Role> getRoles(){
		return this.roleRepository.findAll();
	}
	
	@GetMapping("locations")
	public List<Locations> getLocations(){
		return this.locationRepository.findAll();
	}
	
	@DeleteMapping("deleteUser/{id}")
	public User deleteUser(@PathVariable Long id){
		System.out.println("Successfully Deleted....!");
		User usr = userRepositiory.findById(id).orElse(null);
		userRepositiory.delete(usr);
		return usr;
	}
	
	@DeleteMapping("deleteRole/{id}")
	public Role deleteRole(@PathVariable Long id){
		System.out.println("Successfully Deleted....!");
		Role role = roleRepository.findById(id).orElse(null);
		roleRepository.delete(role);
		return role;
	}
	
	@DeleteMapping("deleteLocation/{id}")
	public Locations deleteLocation(@PathVariable Long id){
		System.out.println("Successfully Deleted....!");
		Locations location = locationRepository.findById(id).orElse(null);
		locationRepository.delete(location);
		return location;
	}
	
	@GetMapping("editRole/{id}")
	public Role editRole(@PathVariable Long id) {
		Role role = roleRepository.findById(id).orElse(null);
		return role;
	}
	
	@GetMapping("editLocation/{id}")
	public Locations editLocation(@PathVariable Long id) {
		Locations location = locationRepository.findById(id).orElse(null);
		return location;
	}
	
	@GetMapping("hello")
	public String hello() {
		return "hello Omkar....!";
	}
	
	@PostMapping("createUser")
	public UserLogin createUser(@RequestBody JsonNode json){
		System.out.println(json);
		ObjectMapper objectMapper = new ObjectMapper();
		if(!json.isEmpty()) {
			UserLogin user =  objectMapper.convertValue(json, UserLogin.class);
			return userLoginRepository.save(user);
		}
		return null;
	}
	
	@PostMapping("loginUser")
	public UserLogin loginUser(@RequestBody JsonNode json){
		System.out.println(json);
		UserLogin userLoginData = null;
		UserLogin userLogin = null;
		JsonNode userNamejson = json.get("username");
		JsonNode userPasswordjson = json.get("password");
		String userName = "";
		String userPassword = "";
		if(userNamejson != null) {
			userName = userNamejson.asText();
		}
		if(userPasswordjson != null) {
			userPassword = userPasswordjson.asText();
		}
		if(!"".equals(userName)) {
			userLoginData = userLoginRepository.getUserDetailsByuname(userName);
			System.out.println(userLoginData);
			if(userLoginData != null) {
				if(userLoginData.getPsw() != null) {
					if(userPassword != null && !"".equals(userPassword)) {
						if(userPassword.equals(userLoginData.getPsw())) {
							userLogin = userLoginRepository.getUserDetailsByuname(userName);
						}
					}
				}
			}
		}
		return userLogin;
	}
	
	/*@PostMapping("checkDuplicate")
	public UserLogin getUsersDetails(@RequestBody JsonNode json){
		JsonNode userNamejson = json.get("username");
		
		String userName = "";
		if(userNamejson != null) {
			userName = userNamejson.asText();
		}
		UserLogin userLogin = null;
		userLogin = userLoginRepository.getUserDetailsByuname(userName);
		return userLogin;
	}*/
	
	@PostMapping("uploadFile")
	public String uploadFile( @RequestParam("file") MultipartFile file, @RequestParam("userId") String userId,
			HttpServletRequest request){
		System.out.println(file);
		/*if(!file.isEmpty() && file != null) {
			System.out.println("File Name : "+file.getName());
			System.out.println("Content Type : "+file.getContentType());
			System.out.println("OriginalFile Name : "+file.getOriginalFilename());
			System.out.println("Size : "+file.getSize());
		}
		return null;*/
		 if (file.isEmpty()) {
	            return "File is empty. Please select a file to upload.";
	        }

	        try {
	            File uploadPath = new File(uploadDir);
	            if (!uploadPath.exists()) {
	                uploadPath.mkdirs();
	            }
	            Date date = new Date();
	            File destinationFile = new File(uploadPath, file.getOriginalFilename());
	            file.transferTo(destinationFile);
	            DocumentUpload document = new DocumentUpload();
	            document.setFileName(file.getOriginalFilename());
	            document.setContentType(file.getContentType());
	            document.setOriginalFile(file.getOriginalFilename());
	            document.setFileSize(file.getSize());
	            document.setUserId(Long.parseLong(userId));
	            document.setPath(destinationFile.getAbsolutePath());
	            document.setCreatedDate(date);
	            document.setIpAddress(request.getRemoteAddr());
	            documentUploadRepository.save(document);
	            return "File uploaded successfully to: " + destinationFile.getAbsolutePath();
	        } catch (IOException e) {
	            return "Error uploading the file.";
	        }
	    }
	
	@GetMapping("getDocuments")
	public List<DocumentUpload> getDocuments(){
		return documentUploadRepository.findAll();
	}
	
}
