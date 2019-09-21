package com.dev.hotelBilling;

public class Hotel {

	private int itemCode;
	private String foodName;
	private Double price;
	public int getItemCode() {
		return itemCode;
	}
	public void setItemCode(int itemCode) {
		this.itemCode = itemCode;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Hotel [itemCode=" + itemCode + ", foodName=" + foodName + ", price=" + price + "]";
	}
	
	
	

}
