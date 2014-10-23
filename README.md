simpleDate
==========

Get rid of the confused weird result format coming from new date().getYear().getMonth().getDate()

It's easy to get Thu Jan 01 1970 08:00:00 GMT+0800 (SGT) format by new Date()
but when we try to use .getMonth(), .getYear() , .getDate() weird things happened, we get useless stuffs, With this simpleDate javascript library, it's easy to get what we want, the year, month, day, no more split, or wirting the conditions by your own.

How to use
----------

var test = new simpleDate();

test.getYear();  	--- you get the current  year

test.getMonth();	--- you get the current month

test.getDay();		--- you get the current day
