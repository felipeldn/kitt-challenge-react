# Kitt Application

The React app within this directory contains the solution to the problem described below:

**Create a function that takes a booking length in minutes and returns a price**

The intended functionality of the service is to calculate the price of a
meeting room based upon the given meeting duration and following
[min|hour|day|week] tariff:

Price per minute: £2<br/>
Price per hour: £22<br/>
Price per day: £60<br/>
Price per week: £105<br/>

- The pricing function should use the cheapest rate for given
duration.

- For example if the duration is 3 hours it should use the daily price
of £60 as this is cheaper than using the price per hour (£66).

1440 minutes = £60<br/>
2880 minutes = £105<br/>
20160 minutes = £210<br/>