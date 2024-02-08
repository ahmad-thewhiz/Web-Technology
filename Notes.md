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
* <title>
* <style>
* <link>
* <meta>
* <script>
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

