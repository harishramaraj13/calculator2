function performCalculation()
 {
     const integer1 = parseInt(document.getElementById("integer1").value);
       const integer2 = parseInt(document.getElementById("integer2").value);
       const operation = document.getElementById("operation").value;
let result;
 switch (operation) {
    case "add":
     result = integer1 + integer2;
      break;
      case "subtract":
      result = integer1 - integer2;
       break;
       case "multiply":
        result = integer1 * integer2;
         break;
         case "divide":
          result = integer1 / integer2;
          break;
           default:
           result = "Invalid operation";
        }
 // Send the result and input values to the iOS app    
window.webkit.messageHandlers.pwaHandler.postMessage({
     integer1: integer1,
     integer2: integer2,
      operation: operation,
       output: result,
     });}