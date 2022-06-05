import axios from "axios";
import {user} from "../stores";

export class DonationService {
    // baseUrl = "https://obscure-refuge-81832.herokuapp.com";

    constructor(baseUrl) {
        console.log("HELLO OWEN");
        this.baseUrl = "http://localhost:4000";
        console.log(this.baseUrl);
        const venueCredentials = localStorage.venue;
        if (venueCredentials) {
            const savedUser = JSON.parse(venueCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.venue = JSON.stringify({email: email, token: response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("venue");
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    }

    async add(venue) {
        try {
            const response = await axios.post(this.baseUrl + "/api/countries/" + venue.country + "/venues", venue);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async getCountries() {
        try {
            const response = await axios.get(this.baseUrl + "/api/countries");
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async getVenues() {
        try {
            const response = await axios.get(this.baseUrl + "/api/venues");
            return response.data;
        } catch (error) {
            return [];
        }
    }
}
