package com.dev.hotelBilling;

import java.util.HashMap;

public class HotelIntImpl implements HotelInt {

	HashMap<String,Hotel> hm = new HashMap<String, Hotel>();

	@Override
	public Hotel putData(String s, Hotel h) {
		if((s!=null)&&(h!=null)) {
			Hotel h1 = hm.put(s,h);
			return h;
		}
		return null;
	}

	@Override
	public void getData() {
		System.out.println(hm);
		
	}

	@Override
	public Hotel removeData(String s, Hotel h) {
		Hotel h1 = hm.remove(s);
		return null;
	}
	
	
	
}
