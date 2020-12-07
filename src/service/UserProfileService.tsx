export class UserProfilService {
    public async getUserProfile(): Promise<any> { // получение данных
        const response = await fetch("./api/user-profile");
        return await response.json();
    }
    
    /**
     * ... множество других методов для работы с профилем пользователя
     */
}