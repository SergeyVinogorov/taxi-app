import { UserProfilRepository } from "./UserProfilRepository";
import { UserProfileDto } from "./UserProfileDto";
import { reflection } from "first-di";

@reflection
export class UserProfilService {

    private readonly userProfilRepository: UserProfilRepository;

    constructor(userProfilRepository: UserProfilRepository) {
        this.userProfilRepository = userProfilRepository;
    }

    public async getUserProfile(): Promise<UserProfileDto> {
        return await this.userProfilRepository.getUserProfile();
    }

    /**
     * ... множество других методов для работы с профилем пользователя
     */
}