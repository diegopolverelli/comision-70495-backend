export class CustomError{
    static generateError=(name, message, cause, code=400)=>{
        let error=new Error(message, {cause})
        error.name=name
        error.code=code
        error.custom=true
        
        throw error        
    }
}