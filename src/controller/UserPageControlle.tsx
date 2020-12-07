import { UserProfilService } from "./UserProfilService";
import { TariffService } from "./TariffService";

export class UserPageController {

    public userProfile: any = {};
    public insuranceCases: any[] = [];
    public tariffs: any[] = [];
    public bestTariff: any = {};

    // внедряем сервисы в контроллер
    private readonly userProfilService: UserProfilService = new UserProfilService();
    private readonly tarifService: TariffService = new TariffService();

    constructor() {
        this.activate();
    }

    public activate(): void {
        this.requestUserProfile();
        this.requestTariffs();
    }

    public async requestUserProfile(): Promise<void> {
        try {
            // используем сервисы для получения данных
            this.userProfile = await this.userProfilService.getUserProfile();
            this.bestTariff = await this.tarifService.findBestTariff(this.userProfile);
        } catch (e) {
            console.error(e);
        }
    }

    public async requestTariffs(): Promise<void> {
        try {
            // используем сервис для получения данных
            this.tariffs = await this.tarifService.getTariffs();
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * ... множество других методов, запрос страховых случаев,
     * редактирование профиля, выбор тарифа и прочее
     */
}