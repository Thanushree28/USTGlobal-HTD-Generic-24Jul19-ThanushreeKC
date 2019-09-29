package com.dev.contact;

import java.util.HashSet;
import java.util.Scanner;

public class ContactMainClass {

	public static void main(String[] args) {
		ContactImplementation ci= new ContactImplementation();
		HashSet<Contact> hs= new HashSet<Contact>();

		Scanner scr=new Scanner(System.in);
		
		Contact c1 =new Contact();
		c1.setName("Thanushree");
		c1.setNumber(8899995599l);
		c1.setGroup("Group-A");
		
		Contact c2 =new Contact();
		c2.setName("Anuktha");
		c2.setNumber(2233445599l);
		c2.setGroup("Group-B");

		Contact c3 =new Contact();
		c3.setName("Yashas");
		c3.setNumber(9988445997l);
		c3.setGroup("Group-C");
		
		Contact c4 =new Contact();
		c4.setName("Chinmayee");
		c4.setNumber(9900005997l);
		c4.setGroup("Group-D");
	
		Contact c5 =new Contact();
		c5.setName("Megha");
		c5.setNumber(9900445110l);
		c5.setGroup("Group-E");
	
	
		System.out.println("Press 1 to list all the contacts");
		int entry1 = scr.nextInt();
		
		if(entry1==1)
		{
		ci.putData("1", c1);
		ci.putData("2", c2);
		ci.putData("3", c3);
		System.out.println(ci.hm);
		}
		else {
			System.out.println("Incorrect Option Selected!!!!! Press 1 to list all the contacts");
		}
		
		System.out.println("------------------------------------------------------------------------");
		System.out.println("Press 2 to search the contact");
		int entry2 = scr.nextInt();
		if(entry2==2) {
			System.out.println("Contact has been searched");
			ci.containsData("1",c2);
			System.out.println("Press 1 to call");
			int press1 = scr.nextInt();
			if(press1==1) {
				System.out.println("Calling");
				
			}else {
				System.out.println("Invalid!!!");
			}
			
			System.out.println("Press 2 to message");
			int press2 = scr.nextInt();
			if(press2==2) {
				System.out.println("Message sent");
				
			}else {
				System.out.println("Invalid!!!");
			}
			
			System.out.println("Press 3 to go back to main menu");
			int press3 = scr.nextInt();
			if(press3==3) {
				System.out.println("Back to menu");
				
			}else {
				System.out.println("Invalid!!!");
			}
		}
		else {
			System.out.println("Invalid Option selected!!!");
		}
		
		System.out.println("--------------------------------------------------------------------");
		System.out.println("Press 3 to operate on contacts");
		int entry3 = scr.nextInt();
		if(entry3==3) {
			System.out.println("Press 1 to add contacts");
			int p1 = scr.nextInt();
			if(p1==1) {
				System.out.println("Contacts Added");
				ci.putData("1", c1);
				ci.putData("2", c2);
				ci.putData("3", c3);
				ci.putData("4", c4);
				ci.putData("5", c5);
				System.out.println(ci.hm);
				}else {
					System.out.println("Invalid....");
				}
			System.out.println("Press 2 to delete contact");
			int p2 = scr.nextInt();
			if(p2==2) {
				System.out.println("Contact Deleted");
				ci.removeData("2", c2);
				ci.removeData("3", c3);
				ci.removeData("4", c3);
				ci.removeData("5", c3);
				System.out.println(ci.hm);
				}else {
					System.out.println("Invalid....");
				}
			System.out.println("Press 3 to edit contact");
			int p3 = scr.nextInt();
			if(p3==3) {
				System.out.println("Contacts Edited");
				c1.setName("Suma");
				c1.setNumber(8899995599l);
				c1.setGroup("group-P");
				
				c5.setName("Raksha");
				c5.setNumber(9900445110l);
				c5.setGroup("group-Q");
				
				ci.putData("1", c1);
				ci.putData("5", c5);
				System.out.println(ci.hm);
			
				}else {
					System.out.println("Invalid....");
				}
			}else {
				System.out.println("Invalid!!!");
			}
		
	}

}
