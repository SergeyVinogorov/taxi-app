import { UserProfileDto } from "./UserProfileDto";
import { reflection } from "first-di";

@reflection // заставляет typescript генерировать рефлексию
export class MockUserProfilRepository { // репозиторий для тестов
    public async getUserProfile(): Promise<UserProfileDto> {
        const profile = new UserProfileDto();
        profile.firstName = "Констанция";
        profile.lastName = "Константинопольская";
        profile.birthdate = new Date(Date.now() - 1.5e12);
        return Promise.resolve(profile); // возвращаем тестовые данные
    }

    /**
     * ... множество других методов для рабоыт с профилем пользователя
     */
}