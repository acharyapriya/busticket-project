export class Booking {
   private scheduleID !:String;
   private bookingLabel!:String;
   private fare!:number;
   private noOfBookingSeats!:number;
   private userName!:String;
   private bookingId!:String;
   private bookingStatus!:String
   private busId!:String
   

    

    /**
     * Getter scheduleID
     * @return {String}
     */
	public getScheduleID(): String {
		return this.scheduleID;
	}


     /**
     * Getter busId
     * @return {String}
     */
	public getbusId(): String {
		return this.busId;
	}

     /**
     * Getter scheduleID
     * @return {String}
     */
	public getbookingStatus(): String {
		return this.bookingStatus;
	}


     /**
     * Getter bookingId
     * @return {String}
     */
	public getbookingId(): String {
		return this.bookingId;
	}

     /**
     * Getter scheduleID
     * @return {String}
     */
	public getuserName(): String {
		return this.userName;
	}

    /**
     * Getter noOfBookingSeats
     * @return {String}
     */
	public getbookingLabel(): String {
		return this.bookingLabel;
	}

    /**
     *  * @return {number}
     */
	public getfare(): number {
		return this.fare;
	}


     /**
     *  * @return {number}
     */
	public getnoOfBookingSeats(): number {
		return this.noOfBookingSeats;
	}

    

   

    /**
     * Setter bookingId
     * @param {String} value
     */
	public setbookingId(value: String) {
		this.bookingId = value;
	}



     /**
     * Setter bookingId
     * @param {String} value
     */
	public setbusId(value: String) {
		this.busId = value;
	}

     /**
     * Setter bookingId
     * @param {String} value
     */
	public setbookingStatus(value: String) {
		this.bookingStatus = value;
	}


     /**
     * Setter scheduleID
     * @param {String} value
     */
	public setScheduleID(value: String) {
		this.scheduleID = value;
	}

    /**
     * Setter noOfBookingSeats
     * @param {String} value
     */
	public setbookingLabel(value: String) {
		this.bookingLabel = value;
	}

     /**
     * Setter userName
     * @param {String} value
     */
	public setuserName(value: String) {
		this.userName = value;
	}

     

   
    
    /**
     * Setter noOfBookingSeats
     * @param {number} value
     */
	public setfare(value: number) {
		this.fare = value;
	}

      /**
     * Setter noOfBookingSeats
     * @param {number} value
     */
	public setnoOfBookingSeats(value: number) {
		this.noOfBookingSeats = value;
	}
   


}


