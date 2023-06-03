export const convertSentenceCase = (text:string = "") => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
};

export function titleCase(str: string = ""): string {
    // Step 1. Lowercase the string
    str = str.toLowerCase();
  
    // Step 2. Split the string into an array of strings
    const words = str.split(' ');
  
    // Step 3. Create the FOR loop
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Step 4. Return the output
    return words.join(' ');
  }
  