export class UsersDTO{
    constructor(user){
        this.username=user.username, 
        this.email=user.email, 
        this.fullName=`${user.first_name} ${user.last_name}`
        this.role=user.role
    }
}