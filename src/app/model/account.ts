export class Accounts {

    accountdetails: any = [

        { cardheader: "Profile", cardbody: [{ cardtitle: "Photo", cardvalue: "This My Photo", cardaction: "change" }, { cardtitle: "Email", cardvalue: "jamesdoe@website.com", cardaction: "change" }, { cardtitle: "Website", cardvalue: "https://johndoewebsite.com", cardaction: "change" }, { cardtitle: "Location", cardvalue: "Newyork", cardaction: "change" }], cardfooter: "Manage Preferences" },
        { cardheader: "Preferences", cardbody: [{ cardtitle: "Language", cardvalue: "English", cardaction: "change" }, { cardtitle: "Time zone", cardvalue: "central Standard Time(UTC-6)", cardaction: "change" }, { cardtitle: "Currency", cardvalue: "$(US Dollars)", cardaction: "change" }, { cardtitle: "Email-Subscription", cardvalue: "Off", cardaction: "change" }, { cardtitle: "SMS Notification", cardvalue: "On", cardaction: "change" }], cardfooter: "Manage Preferences" },
        { cardheader: "security", cardbody: [{ cardtitle: "password", cardvalue: "••••••••",cardaction: "change" }, { cardtitle: "Two-Factor Authentication", cardvalue: "You haven't set up two-factor authentication.",cardaction:"Set Up" }], cardfooter: "Manage Security" },
        { cardheader: "Payment Methods", cardbody: [{ cardtitle: "Card/Debit card", cardvalue: "1234****568",cardaction: "edit" }, { cardtitle: "PayPal  ", cardvalue: "Not connected",cardaction:"connect" }], cardfooter: "Manage Payment" },
   
    ]
}