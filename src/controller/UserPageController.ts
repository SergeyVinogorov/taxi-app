import { UserProfilService } from "./UserProfilService";
import { TariffService } from "./TariffService";
import { UserProfileDto } from "./UserProfileDto";
import { TariffDto } from "./TariffDto";
import { InsuranceCaseDto } from "./InsuranceCasesDto";
import { autowired } from "first-di";
import { BaseComponent } from "./BaseComponent";
import { userPageView } from "./UserPageview";

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class UserPageController<P extends UserPageOptions, S> extends BaseComponent<P, S> {

    public userProfile: UserProfileDto = new UserProfileDto();
    public insuranceCases: InsuranceCaseDto[] = [];
    public tariffs: TariffDto[] = [];
    public bestTariff: TariffDto | void = void 0;

    public readonly view = userPageView;

    @autowired()
    private readonly userProfilService!: UserProfilService;

    @autowired()
    private readonly tarifService!: TariffService;

    // запустится при componentDidMount, см. BaseComponent
    public activate(): void {
        this.requestUserProfile();
        this.requestTariffs();
    }

    public async requestUserProfile(): Promise<void> {
        try {
            this.userProfile = await this.userProfilService.getUserProfile();
            this.bestTariff = await this.tarifService.findBestTariff(this.userProfile);
            this.forceUpdate();
        } catch (e) {
            console.error(e);
        }
    }

    public async requestTariffs(): Promise<void> {
        try {
            this.tariffs = await this.tarifService.getTariffs();
            this.forceUpdate();
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * ... множество других методов, запрос страховых случаев,
     * редактирование профиля, выбор тарифа и прочее
     */
}