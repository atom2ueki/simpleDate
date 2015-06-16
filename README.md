simpleDate
==========

Get rid of the confused weird result format coming from new date().getYear().getMonth().getDate()

It's easy to get Thu Jan 01 1970 08:00:00 GMT+0800 (SGT) format by new Date()
but when we try to use .getMonth(), .getYear() , .getDate() weird things happened, we get useless stuffs, With this simpleDate javascript library, it's easy to get what we want, the year, month, day, no more split, or wirting the conditions by your own.

How to use
----------
Download the zip file from github directly

or install via bower <code> bower install simple-date

<h5> link the script file

<code><script src="simpleDate.js"></script>

<h5> initialize simpleDate

<code>var test = new simpleDate(date);

* note: date is the date format

<h5>get the current year, month, day, and YYMMDD

<code>test.getYear();

<code>test.getMonth();

<code>test.getDay();

<code>test.getYYMMDD();

* Year is in four XXXX digits String format, Month and Day are in two XX digits String format.
