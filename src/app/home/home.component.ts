import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nameList: any;

  auctionHammerValue: String;
  hammerprice: any;
  pricepaid: any;
  location: number;
  input: string = "Input%"
  auctionCities: any = [{ "City": "" }];
  graphArry:any = [];
  israngeGraph:boolean = true;
  AuctionHouse: { Name: string, cities: any }[] = [
    {
      "Name": "Christie's",
      "cities": [
        {
          "City": "London",
          "rate": [
            {
              "Rate": "25%",
              "currency": "£",
              "Threshold": "Up to £225,000",
              "value": 225000

            },
            {
              "Rate": "20%",
              "currency": "£",
              "Threshold": "£225,001 to £3,000,000",
              "value": 300000
            },
            {
              "Rate": "13.50%",
              "currency": "£",
              "Threshold": "£3,000,001 and above",
              "value": 300001
            }
          ]
        },
        {
          "City": "New York",
          "rate": [
            {
              "Rate": "25%",
              "currency": "$",
              "Threshold": "Up to $300,000",
              "value": 300000
            },
            {
              "Rate": "20%",
              "currency": "$",
              "Threshold": "$300,001 to $4,000,000",
              "value": 400000
            },
            {
              "Rate": "13.50%",
              "currency": "$",
              "Threshold": "$4,000,001 and above",
              "value": 400001
            }
          ]
        },
        {
          "City": "Dubai",
          "rate": [
            {
              "Rate": "25%",
              "currency": "$",
              "Threshold": "Up to $300,000",
              "value": 300000
            },
            {
              "Rate": "20%",
              "currency": "$",
              "Threshold": "$300,001 to $4,000,000",
              "value": 400000
            },
            {
              "Rate": "13.50%",
              "currency": "$",
              "Threshold": "$4,000,001 and above",
              "value": 400001
            },
          ]
        },
        {
          "City": "Hong Kong",
          "rate": [
            {
              "Rate": "25%",
              "currency": "HK$",
              "Threshold": "Up to HK$2,500,000",
              "value": 250000
            },
            {
              "Rate": "20%",
              "currency": "HK$",
              "Threshold": "HK$2,500,001 to HK$30,000,000",
              "value": 300000
            },
            {
              "Rate": "13.50%",
              "currency": "HK$",
              "Threshold": "HK$30,000,001 and above",
              "value": 300001
            }
          ]
        },
        {
          "City": "Shanghai",
          "rate": [
            {
              "Rate": "20%",
              "currency": "",
              "Threshold": "No Threshold",
              "value": 0
            },
          ]
        },
        {
          "City": "Geneva",
          "rate": [
            {
              "Rate": "25%",
              "currency": "CHF",
              "Threshold": "Up to CHF300,000",
              "value": 300000
            },
            {
              "Rate": "20%",
              "currency": "CHF",
              "Threshold": "CHF300,001 to CHF4,000,000",
              "value": 400000
            },
            {
              "Rate": "13.50%",
              "currency": "CHF",
              "Threshold": "CHF4,000,001 and above",
              "value": 400001
            }
          ]
        },
        {
          "City": "Zurich",
          "rate": [
            {
              "Rate": "25%",
              "currency": "CHF",
              "Threshold": "Up to CHF300,000",
              "value": 300000
            },
            {
              "Rate": "20%",
              "currency": "CHF",
              "Threshold": "CHF300,001 to CHF4,000,000",
              "value": 400000
            },
            {
              "Rate": "13.50%",
              "currency": "CHF",
              "Threshold": "CHF4,000,001 and above",
              "value": 400001
            },

          ]
        },
        {
          "City": "Paris",
          "rate": [
            {
              "Rate": "25%",
              "currency": "€",
              "Threshold": "Up to €200,000",
              "value": 200000
            },
            {
              "Rate": "20%",
              "currency": "€",
              "Threshold": "€200,001 to €2,500,000",
              "value": 250000
            },
            {
              "Rate": "13.50%",
              "currency": "€",
              "Threshold": "€2,500,001 and above",
              "value": 250001
            },

          ]
        },
        {
          "City": "Amsterdam (include VAT)",
          "rate": [
            {
              "Rate": "30.25%",
              "currency": "€",
              "Threshold": "Up to €200,000",
              "value": 200000
            },
            {
              "Rate": "24.20%",
              "currency": "€",
              "Threshold": "€200,001 to €2,500,000",
              "value": 250000
            },
            {
              "Rate": "16.34%",
              "currency": "€",
              "Threshold": "€2,500,001 and above",
              "value": 250001
            },
          ]
        },
        {
          "City": "Milan (include VAT)",
          "rate": [
            {
              "Rate": "30.50%",
              "currency": "€",
              "Threshold": "Up to €200,000",
              "value": 200000
            },
            {
              "Rate": "24.40%",
              "currency": "€",
              "Threshold": "€200,001 to €2,500,000",
              "value": 250000
            },
            {
              "Rate": "16.47%",
              "currency": "€",
              "Threshold": "€2,500,001 and above",
              "value": 250001
            },
          ]
        },
      ]
    },
    {
      "Name": "Sotheby's",
      "cities": [
        {
          "City": "New York",
          "rate": [
            {

              "Rate": "25%",
              "currency": "$",
              "threshold": "Up to  $400,000",
              "value": 400000
            },
            {

              "Rate": "20%",
              "currency": "$",
              "threshold": "$400,000 to $4,000,000",
              "value": 4000000
            },
            {

              "Rate": "13.90%",
              "currency": "$",
              "threshold": "$4,000,001 and above",
              "value": 4000001
            },
          ]
        },
        {
          "City": "London",
          "rate": [{

            "Rate": "25%",
            "currency": "£",
            "threshold": "Up to £300,000",
            "value": 300000
          },
          {

            "Rate": "20%",
            "currency": "£",
            "threshold": " £300,000 to £3,000,000",
            "value": 3000000
          },
          {

            "Rate": "13.90%",
            "currency": "£",
            "threshold": "£3,000,000 and above",
            "value": 3000001
          },
          ]
        },
        {
          "City": "Paris",
          "rate": [
            {
              "place": "Paris",
              "Rate": "25%",
              "currency": "€",
              "threshold": "Up to €250,000",
              "value": 250000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "€",
              "threshold": "€250,000 to €2,500,000",
              "value": 2500000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "€",
              "threshold": "€2,500,000 and above",
              "value": 2500001
            },
          ]
        },
        {
          "City": "Milan",
          "rate": [
            {
              "place": "Milan",
              "Rate": "30.50%",
              "currency": "€",
              "threshold": "Up to €250,000",
              "value": 250000
            },
            {
              "place": "",
              "Rate": "24.40%",
              "currency": "€",
              "threshold": "€250,000 to €2,500,000",
              "value": 2500000
            },
            {
              "place": "",
              "Rate": "16.96%",
              "currency": "€",
              "threshold": "€2,500,000 and above",
              "value": 2500001
            },
          ]
        },
        {
          "City": "Switzerland",
          "rate": [
            {
              "place": "Switzerland",
              "Rate": "25%",
              "currency": "CHF",
              "threshold": "Up to CHF 400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "CHF",
              "threshold": "CHF 400,000 to CHF 4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "CHF",
              "threshold": "CHF 4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "Hong Kong",
          "rate": [
            {
              "place": "Hong Kong",
              "Rate": "25%",
              "currency": "HKD",
              "threshold": "Up to HKD 3,500,000",
              "value": 3500000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "HKD",
              "threshold": "HKD 3,500,000 to HKD 31,000,000",
              "value": 31000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "HKD",
              "threshold": "HKD 31,000,000 and above",
              "value": 31000001
            },

          ]
        },
      ]
    },
    {
      "Name": "Phillip's",
      "cities": [
        {
          "City": "New York",
          "rate": [
            {
              "place": "New York",
              "Rate": "25%",
              "currency": "$",
              "threshold": "Up to  $400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "$",
              "threshold": "$400,000 to $4,000,000",
              "value": 4000000

            },
            {
              "place": "",
              "Rate": "13.50%",
              "currency": "$",
              "threshold": "$4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "London",
          "rate": [
            {
              "place": "London",
              "Rate": "25%",
              "currency": "£",
              "threshold": "Up to £300,000",
              "value": 300000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "£",
              "threshold": " £300,000 to £3,000,000",
              "value": 3000000
            },
            {
              "place": "",
              "Rate": "13.50%",
              "currency": "£",
              "threshold": "£3,000,000 and above",
              "value": 3000001
            },

          ]
        },
        {
          "City": "Geneva",
          "rate": [
            {
              "place": "Geneva",
              "Rate": "25%",
              "currency": "CHF",
              "threshold": "Up to CHF 400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "CHF",
              "threshold": "CHF 400,000 to CHF 4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.50%",
              "currency": "CHF",
              "threshold": "CHF 4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "Hong Kong",
          "rate": [
            {
              "place": "Hong Kong",
              "Rate": "25%",
              "currency": "HKD",
              "threshold": "Up to HKD 3,000,000",
              "value": 3000000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "HKD",
              "threshold": "HKD 3,000,000 to HKD 30,000,000",
              "value": 30000000

            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "HKD",
              "threshold": "HKD 30,000,000 and above",
              "value": 30000001
            },

          ]
        },
        {
          "City": "Online",
          "rate": [
            {
              "place": "Online",
              "Rate": "25%",
              "currency": "$",
              "threshold": "Up to  $400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "$",
              "threshold": "$400,000 to $4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.50%",
              "currency": "$",
              "threshold": "$4,000,000 and above",
              "value": 4000001
            },

          ]
        }
      ]
    },
    {
      "Name": "Bonhams",
      "cities": [
        {
          "City": "United Kingdom",
          "rate": [
            {
              "place": "United Kingdom",
              "Rate": "27.50%",
              "currency": "£",
              "threshold": "Up to £2,500",
              "value": 25000
            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "£",
              "threshold": "£2,500 to £300,000",
              "value": 300000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "£",
              "threshold": "£300,000 to £3,000,000",
              "value": 300000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "£",
              "threshold": "£3,000,000 and above",
              "value": 300001
            },

          ]
        },
        {
          "City": "United States",
          "rate": [
            {
              "place": "United States",
              "Rate": "27.50%",
              "currency": "$",
              "threshold": "Up to  $3,000"
            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "$",
              "threshold": "$3,000 to $400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "$",
              "threshold": "$400,000 to $4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "$",
              "threshold": "$4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "Hong Kong",
          "rate": [
            {
              "place": "Hong Kong",
              "Rate": "27.50%",
              "currency": "HKD",
              "threshold": "Up to HKD 25,000",
              "value": 25000
            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "HKD",
              "threshold": "HKD 25,000 to HKD 3,000,000",
              "value": 300000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "HKD",
              "threshold": "HKD 3,000,000 to HKD 30,000,000",
              "value": 30000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "HKD",
              "threshold": "HKD 30,000,000 and above",
              "value": 30000001
            },

          ]
        },
        {
          "City": "France & Monaco",
          "rate": [
            {
              "place": "France & Monaco",
              "Rate": "27.50%",
              "currency": "€",
              "threshold": "Up to €3,000",
              "value": 3000

            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "€",
              "threshold": "€3,000 to €400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "€",
              "threshold": "€400,000 to €2,500,000",
              "value": 2500000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "€",
              "threshold": "€2,500,000 and above",
              "value": 2500001
            },

          ]
        },
        {
          "City": "Australia",
          "rate": [
            {
              "place": "Australia",
              "Rate": "22%",
              "currency": "$",
              "threshold": "all",
              "value": null
            },

          ]
        },
        {
          "City": "Belgium",
          "rate": [
            {
              "place": "Belgium",
              "Rate": "27.50%",
              "currency": "€",
              "threshold": "Up to €3,000",
              "value": 30000
            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "€",
              "threshold": "€3,000 to €400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "€",
              "threshold": "€400,000 to €4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "€",
              "threshold": "€4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "Germany",
          "rate": [
            {
              "place": "Germany",
              "Rate": "27.50%",
              "currency": "€",
              "threshold": "Up to €3,000",
              "value": 3000
            },
            {
              "place": "",
              "Rate": "25%",
              "currency": "€",
              "threshold": "€3,000 to €400,000",
              "value": 400000
            },
            {
              "place": "",
              "Rate": "20%",
              "currency": "€",
              "threshold": "€400,000 to €4,000,000",
              "value": 4000000
            },
            {
              "place": "",
              "Rate": "13.90%",
              "currency": "€",
              "threshold": "€4,000,000 and above",
              "value": 4000001
            },

          ]
        },
        {
          "City": "Denmark",
          "rate": [
            {
              "place": "Denmark",
              "Rate": "15%",
              "currency": "DEN",
              "threshold": "all",
              "value": null

            },

          ]
        },
      ]
    },
    {
      "Name": "Poly Auction",
      "cities": [
        {
          "City": "Hong Kong",
          "rate": [
            {
              "place": "Hong Kong",
              "Rate": "18%",
              "currency": "HKD",
              "threshold": "all",
              "value": null
            },
          ]
        }
      ]
    },
    {
      "Name": "China Guardian",
      "cities": [
        {
          "City": "Beijing",
          "rate": [
            {
              "place": "Beijing",
              "Rate": "15%",
              "currency": "CNH",
              "threshold": "all",
              "value": null
            }
          ]
        }
      ]
    },
  ]

  ngOnInit() {

  }

  acutionHammerChange() {
    console.log(this.auctionHammerValue);

    this.AuctionHouse.forEach(element => {
      if (element.Name == this.auctionHammerValue) {
        this.auctionCities = element.cities;
        console.log(this.auctionCities);
      }
    });

    this.hammerprice = null;
    this.pricepaid = null;
    this.input = "Input%";

  }
  locationChange() {
    console.log(this.location);
    this.hammerprice = null;
    this.pricepaid = null;
    this.input = "Input%";
    let ratArr = [];
    this.graphArry = []
    this.auctionCities.forEach(cityArray => {
      if (cityArray.City == this.location){
      
      ratArr = cityArray.rate;
      ratArr.forEach((val, index) =>{
        let obj = {
          "leftClass" : "L"+index,
          "rate" : val.Rate,
          "range": val.value ? val.value : 0,
          "rangeClass" : "m"+index
        }
        this.graphArry.push(obj);
        this.israngeGraph = false;
      })
    }
    });
  
  }

  changeHammerPrice() {

    let currencyVal: any = [];
    let rateArray: any = [];

    this.auctionCities.forEach(cityArray => {
      if (cityArray.City == this.location)
        rateArray = cityArray.rate;
    });
    // find the rates for auction
    rateArray.forEach(price => {
      currencyVal.push(price.value);
    });

    currencyVal.sort();
    console.log(currencyVal.length);

    let sum: number = 0;
    let hammerRef = 0;
    let dollarsign: string = "";

    // hammer price exceeds the auction rates boundries
    if (this.hammerprice > currencyVal[currencyVal.length - 1] && currencyVal[0] != null) {
      hammerRef = this.hammerprice;
      for (let i = currencyVal.length - 1; i >= 0; i--) {
        rateArray.forEach(price => {
          sum = sum + (Math.abs(hammerRef - currencyVal[i]) * ((100 + parseInt(price.Rate.split("%")[0])) / 100));
          dollarsign = price.currency;
          if (currencyVal[currencyVal.length - 1] == price.value) {
            this.input = price.Rate;
          }
        });
        hammerRef = currencyVal[i];
      }
      this.pricepaid = dollarsign + " " + sum;
    } else {
      // hammer price in the boundry of auction rates
      if (currencyVal[0] != null) {
        for (let i = 0; i < currencyVal.length; i++) {

          if (this.hammerprice > 0 && this.hammerprice <= currencyVal[i]) {
            rateArray.forEach(price => {
              if (price.value == currencyVal[i]) {
                this.pricepaid = price.currency + " " + (this.hammerprice * ((100 + parseInt(price.Rate.split("%")[0])) / 100));
                this.input = price.Rate;
              }
            })
            break;
          }
        }
      } else {
        // threshold is "all"
        rateArray.forEach(price => {
          if (price.threshold == "all") {
            this.pricepaid = price.currency + " " + (this.hammerprice * ((100 + parseInt(price.Rate.split("%")[0])) / 100));
            this.input = price.Rate;
          }
        })
      }
    }
  }
}
