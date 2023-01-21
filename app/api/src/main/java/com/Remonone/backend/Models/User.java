package com.Remonone.backend.Models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.Remonone.backend.Utils.Encoder;
import com.fasterxml.jackson.annotation.JsonProperty;

@Document
public class User {

	@Id
	private String id;
	
	@JsonProperty("first_name")
	private String firstName;
	@JsonProperty("last_name")
	private String lastName;
	@JsonProperty("birth_date")
	private LocalDate birthDate;
	@JsonProperty("email")
	private String email;
	@JsonProperty("phone")
	private String phone;
	@JsonProperty("gender")
	private String gender;
	@JsonProperty("password")
	private String password;
	@JsonProperty("avatar")
	private String avatar;
	@JsonProperty("settings")
	private Settings settings;
	@JsonProperty("friends")
	private List<Friend> friends;
	@JsonProperty("bookings")
	private List<Booking> bookings;
	@JsonProperty("chats")
	private List<Chat> chats;
	
	public User(String firstName, String lastName, LocalDate birthDate, String email, String phone, String avatar, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.email = email;
		this.phone = phone;
		this.avatar = avatar;
		this.password = Encoder.encode(password);
		this.settings = new Settings();
		this.friends = new ArrayList<Friend>();
		this.bookings = new ArrayList<Booking>();
		this.chats = new ArrayList<Chat>();
	}
	
	private class Settings{
		@JsonProperty("notifications")
		private Notification notifications;
		@JsonProperty("language")
		private Language language;
		@JsonProperty("theme")
		private String theme = "light";
		
		public Settings() {
			this.notifications = new Notification();
			this.language = new Language();
		}
	}
	
	private class Notification{
		@JsonProperty("general")
		private boolean general = true;
		@JsonProperty("sound")
		private boolean sound = true;
		@JsonProperty("vibrate")
		private boolean vibrate = true;
		@JsonProperty("special")
		private boolean special = true;
		@JsonProperty("promo")
		private boolean promo = true;
		@JsonProperty("payments")
		private boolean payments = true;
		@JsonProperty("updates")
		private boolean updates = true;
	}
	
	private class Language{
		@JsonProperty("language")
		private String language = "English";
		@JsonProperty("abbr")
		private String abbr = "EN_US";
	}
	
	private class Friend{
		@JsonProperty("friend_id")
		private String friendId;
	}
	
	private class Booking{
		@JsonProperty("book_id")
		private String book_id;
		@JsonProperty("item_id")
		private String item_id;
		@JsonProperty("details")
		private Details details;
	}
	
	private class Details{
		@JsonProperty("book_starts")
		private LocalDate bookStarts;
		@JsonProperty("book_ends")
		private LocalDate bookEnds;
		@JsonProperty("note")
		private String note;
	}
	
	private class Chat{
		@JsonProperty("chat_id")
		private String chatId; 
	}
}



