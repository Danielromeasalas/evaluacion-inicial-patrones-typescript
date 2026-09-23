export class DatabaseConnection{
    private static instance:DatabaseConnection;
    private constructor(){
    
    }
    public static getInstance(): DatabaseConnection{
        if(this.instance == null){
            this.instance = new DatabaseConnection();
        }
        return this.instance;
    }
}