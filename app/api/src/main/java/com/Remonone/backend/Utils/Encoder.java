package com.Remonone.backend.Utils;

import java.security.SecureRandom;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public final class Encoder {
	public static String encode(String data) {
		int strength = 10;
		 BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(strength, new SecureRandom());
		 return bCryptPasswordEncoder.encode(data);
	}
}
