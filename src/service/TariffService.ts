import { TariffRepository } from "./TariffRepository";
import { TariffDto } from "./TariffDto";
import { UserProfileDto } from "./UserProfileDto";
import { reflection } from "first-di";

@reflection
export class TariffService {

    private readonly tarifRepository: TariffRepository;

    constructor(tarifRepository: TariffRepository) {
        this.tarifRepository = tarifRepository;
    }

    public async getTariffs(): Promise<TariffDto[]> {
        return await this.tarifRepository.requestTariffs();
    }

    public async findBestTariff(userProfile: UserProfileDto): Promise<TariffDto | void> {
        const tariffs = await this.tarifRepository.requestTariffs();
        return tariffs.find((tarif: TariffDto) => {
            const age = userProfile.getAge();
            return age &&
                tarif.ageFrom <= age &&
                age < tarif.ageTo;
        });
    }

    /**
     * ... множество других методов для работы с тарифами
     */
}