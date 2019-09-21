package com.dev.hotelBilling;
import java.util.Scanner;

public class HotelMainClass {

	public static void main(String[] args) {
		HotelIntImpl hii = new HotelIntImpl();

		Hotel h1 = new Hotel();
		h1.setItemCode(1);
		h1.setFoodName("Idli");
		h1.setPrice(35.00);

		Hotel h2 = new Hotel();
		h2.setItemCode(2);
		h2.setFoodName("Dosa");
		h2.setPrice(40.00);

		Hotel h3 = new Hotel();
		h3.setItemCode(3);
		h3.setFoodName("Poori");
		h3.setPrice(30.00);

		Hotel h4 = new Hotel();
		h4.setItemCode(4);
		h4.setFoodName("Kulcha");
		h4.setPrice(38.00);

		Hotel h5 = new Hotel();
		h5.setItemCode(5);
		h5.setFoodName("Pulav");
		h5.setPrice(25.00);

		Scanner s = new Scanner(System.in);
		System.out.println("Please enter the option\n*******************************");
		System.out.println("Press 1 to show all the food items\nPress 2 to take order from customers\n"
				+ "Press 3 to operate on food items\nPress 4 to total bill of the day");
		int option = s. nextInt();
		switch(option) {
		case 1 :
					hii.putData("1",h1);
					hii.putData("2",h2);
					hii.putData("3",h3);
					hii.putData("4",h4);
					hii.putData("5",h5);
					System.out.println(hii.hm);
					break;
		case 2 : System.out.println("Generate Bill ");
		         
		break;
		case 3 : System.out.println("Press A to add food item\nPress B to remove food item\n"
				+ "Press C to modify food item\n");
				String choice = s.nextLine();
				switch(choice) {
				case "A": System.out.println("Insert a food item");
						  hii.putData("1",h1);
						  break;
				case "B": System.out.println("Update a food item");
				          hii.putData("2",h2);
				          break;
				case "C": System.out.println("Delete a food item");
						  hii.removeData("2",h2);
						  break;
				default : System.out.println("Invalid choice");
				
				}
		         
		break;
		case 4 : System.out.println("Total bill");
		break;
		default : System.out.println("Invalid option");
		}

	}

}
