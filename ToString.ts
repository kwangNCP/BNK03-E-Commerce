import { product } from "./product/Item";

class ToString{
    
    private _ToString():void{};

}

    public stockItemToString(Map<Integer, Item> stockItem)
{
    // var person = { 
    //     Integer();
    //     Item();
    //  }; 
        let stringBuilder: any = new stringBuilder();
        stringBuilder.append("{");
        for (Map.Entry<Integer, Item> entry; stockItem.entrySet()) {
           
            stringBuilder.append("(id: " + entry.getKey() + ", " + entry.getValue().toString() + "),\n");
       }
       if(stringBuilder.length() > 1) {
        stringBuilder.setLength(stringBuilder.length() - 2);
    }
    stringBuilder.append("}");
    return stringBuilder.toString();
}

public cartItemToString(Map<Integer, Item> stockItem)
{
    let stringBuilder: any = new stringBuilder();
    stringBuilder.append("{");
        for (Map.Entry<String, Integer> entry : cart.entrySet()) {
            stringBuilder.append("(name: " + entry.getKey() + ", " + entry.getValue() + "),\n");
        }
        if (stringBuilder.length() > 1) {
            stringBuilder.setLength(stringBuilder.length() - 2);
        }
        stringBuilder.append("}");
        return stringBuilder.toString();
    }

