function generateMarkdown(tutorial) {
    const {
      title,
      introduction,
      prerequisites,
      steps,
      code,
      conclusion
    } = tutorial;
  
    const prerequisitesList = prerequisites.map(item => `- ${item}`).join('\n');
  
    const stepsList = steps.map((step, index) => `${index + 1}. ${step}`).join('\n');
  
    return `
  # ${title}
  
  ## Introduction
  
  ${introduction}
  
  ## Prerequisites
  
  ${prerequisitesList}
  
  ## Tutorial Steps
  
  ${stepsList}
  
  ### Step 1: Identifying Credit Card Numbers
  
  Credit card numbers follow specific formats, including Visa, MasterCard, American Express, and Discover. We'll focus on masking these formats.
  
  ### Step 2: JavaScript Code
  
  We'll create a JavaScript snippet to match and mask credit card numbers in the given text.
  
  \`\`\`javascript
  ${code}
  \`\`\`
  
  ## Conclusion
  
  ${conclusion}
  `;
  }
  
  module.exports = generateMarkdown;
  