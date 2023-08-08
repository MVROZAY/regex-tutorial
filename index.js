const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const tutorial = {
  title: "Masking Credit Card Information using Regular Expressions in JavaScript",
  introduction: "In this tutorial, we'll walk through the process of masking credit card information within a text using regular expressions in JavaScript...",
  prerequisites: [
    "Basic understanding of JavaScript.",
    "Basic understanding of regular expressions."
  ],
  steps: [
    "Identifying Credit Card Numbers",
    "JavaScript Code"
  ],
  code: `
const text = "Please use your Visa card 4111-1111-1111-1111 or MasterCard 5555 1234 5678 9012.";

const pattern = /\\b(?:4\\d{3}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}|5\\d{3}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}|3[47]\\d{2}[ -]?\\d{6}[ -]?\\d{5}|6\\d{3}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4})\\b/g;

const maskedText = text.replace(pattern, "****-****-****-****");

console.log(maskedText);
  `,
  conclusion: "By following this tutorial, you've learned how to use regular expressions in JavaScript to mask credit card information. Remember to prioritize data security and use additional security practices when dealing with sensitive information."
};

const markdown = generateMarkdown(tutorial);

fs.writeFile('gist-template.md', markdown, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Markdown written to gist-template.md');
  }
});
