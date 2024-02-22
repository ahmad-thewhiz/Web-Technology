# Basics of Web Technology

## Network
It is a collection of computers, servers, network devices, or other devices connected to one another to allow the sharing of data. An excellent example of a network is the Internet, which connects millions of people all over the world.

## Internet
It is a global network of networks that connects millions of computers together. It allows millions of computers to exchange information with one another.

## Intranet
It is a private network that is contained within an enterprise. It may consist of many interlinked local area networks and also use leased lines in the wide area network. The main purpose of an intranet is to share company information and computing resources among employees.

## Internet Service Provider (ISP)
It is a company that provides customers with Internet access.

## Internet Protocol (IP)
It is a set of rules governing the format of data sent over the Internet or other network. It is the principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries.

## Server
It is a computer or device on a network that manages network resources. It is a computer program or a device that provides functionality for other programs or devices, called "clients". It stores and shares files, folders and other resources.

## World Wide Web (WWW)
It is a system of interlinked hypertext documents accessed via the Internet. With a web browser, one can view web pages that may contain text, images, videos, and other multimedia and navigate between them via hyperlinks.

## Web Browser
It is a software application for accessing information on the World Wide Web. When a user requests a web page from a particular website, the web browser retrieves the necessary content from a web server and then displays the page on the user's device.

## Data Packet
It is a small segment of a larger message. Data sent over computer networks, such as the Internet, is divided into packets. These packets are then recombined by the computer or device that receives them. It is used to securely exchange data between two parties to avoid the risk of malicious attacks or unauthorized snooping during the transmission.

## uniform resource locator (URL)
It is the address of a resource on the Internet. A URL indicates the location of a resource as well as the protocol used to access it. A URL contains the following information: the protocol used to access the resource, the domain name, and the path to the resource.

## GET, POST, PUT, DELETE
These are the four basic HTTP methods used to retrieve web resources. GET is used to retrieve data from a server. POST is used to send data to a server to create or update a resource. PUT is used to create a new resource or update an existing resource. DELETE is used to delete a resource from a server.

## HTTP
It is a protocol that allows the fetching of resources, such as HTML documents. It is the foundation of data communication for the World Wide Web. It is a generic and stateless protocol which can be used for other purposes as well using extensions of its request methods, error codes, and headers.

## Website
It is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. It is hosted on at least one web server, accessible via the Internet or a private local area network through an Internet address known as a Uniform Resource Locator (URL).

# HTML

## HTML Elements
An HTML element is defined by a start tag, some content, and an end tag. 
The HTML element is everything from the start tag to the end tag. 

<tagname>Content goes here...</tagname>
Examples of some HTML elements:
<h1>Heading</h1>
<p>Paragraph</p>

An HTML element can have attributes. Attributes provide additional information about the element. Attributes are always included in the start tag.

## Empty HTML Elements
HTML elements with no content are called empty elements. Empty elements do not have an end tag.
<br> - the line break element

## HTML tag
<html></html>
The <html> tag represents the root of an HTML document. The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).

## Head tag
The head element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.
Metadata is not displayed, it typically defines the document title, styles, scripts, sets and other meta information.
The following elements can be inside head tag:
* `<title>`
* `<style>`
* `<link>`
* `<meta>`
* `<script>`
...etc

## Body Tag
It defines the document's body, it contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
Note: there can only be one body in an HTML document.

## Comment Tag
<!--This is a comment. Comments are not displayed in the browser-->
It is used to insert the comments in the source code. Comments are not displayed in the browsers. They are used to explain the code. 

## Pre Element
<pre> </pre>It defines pre-formatted text. Element withing this tag is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

## Formatting elements
These are elements which are designed to display special types of text:
* <b> - Bold text
* <strong> - Important text
* <i> - Italic text
* <em> - Emphasized text
* <mark> - Marked text
* <small> - Smaller text
* <del> - Deleted text
* <ins> - Inserted text
* <sub> - Subscript text
* <sup> - Superscript text

## Image Tag
<img src="" alt=""> tag is used to embed an image in webpage. It is an empty tag, containing only attributes since it has no closing tag.

## Hyperlinks
<a href="url">link text</a> tag is used to create hyperlinks. It is an empty tag, containing only attributes since it has no closing tag. HTML links are called Hyperlinks, they can be clicked to hover to another document. Hovering the pointer over the link will display the URL. 
By default links will appear as follows in the browser:
* An unvisited link is underlined and blue
* A visited link is underlined and purple
* An active link is underlined and red

## Links vs Hyperlinks
A link is a connection from one web resource to another. A hyperlink is a link that is clickable.
Example: <a href="https://www.example.com">Visit our HTML tutorial</a>

## Absolute and Relative URLs
* Absolute URLs: It is the full URL to the page. It includes the protocol, domain name, and path to the file. Example: <a href="https://www.example.com">Visit our HTML tutorial</a>
* Relatice URLs: A local link (link to the same web site) is specified with a relative URL (without https://www.example.com) Example: <a href="about.html">About HTML Page</a>

## Lists
HTML lists are used to present list of information in well formed and semantic way. There are three different types of list in HTML and each one has a specific purpose and meaning.
* Unordered List: An unordered list is a list of items marked with bullets. Use the <ul> tag to define an unordered list. Use the <li> tag to define each list item.
* Ordered List: An ordered list is a list of items marked with numbers. Use the <ol> tag to define an ordered list. Use the <li> tag to define each list item.
* Description List: A description list is a list of terms, with a description of each term. Use the <dl> tag to define the description list. Use the <dt> tag to define the term. Use the <dd> tag to define the description.

## Tables
The HTML <table> tag is used to create a table. A table is defined with the <table> tag. Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.

## Style
The style attribute is used to add styles to an element, such as color, font, size, and more. The style attribute can contain any CSS property. The property is specified using a CSS property name, followed by a colon, followed by a value. The value is specified using the property's value.
<tagname style="property:value;">

## Forms
HTML form is used to collect user input. The user input is most often sent to server for processing.
Syntax:
<form action="url" method="get/post">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit" value="Submit">

### Input Tag
The HTML <input> element is the most used form element. An <input> element can be displayed in many ways, depending on the type attribute. The type attribute specifies the type of <input> element to display. The default type is text. The <input> element is a self-contained element, meaning it does not have a separate end tag.
<input type="text"> - Displays a single-line text input field
<input type="password"> - Displays a single-line password input field
<input type="radio"> - Displays a radio button
<input type="checkbox"> - Displays a checkbox
<input type="submit"> - Displays a submit button
<input type="reset"> - Displays a reset button

### The <label> Element
The <label> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user is focused on the input element. The <label> element is used in conjunction with the <input> element to improve the user experience. The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together.

## The min and max Attributes
The min and max attributes are used to set the minimum and maximum values for an input field. The min attribute specifies the minimum value for an input field. The max attribute specifies the maximum value for an input field.
Example:
<input type="number" name="quantity" min="1" max="5">

set a max date, a min date and a range date in a date field:
<input type="date" name="bday" max="2021-12-31" min="2015-01-01" value="2021-12-31">


