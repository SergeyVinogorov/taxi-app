import { Serializable, jsonProperty } from "ts-serializable";

export class UserProfileDto extends Serializable { // <-- наследуемся от базового класса

    @jsonProperty(String, null) // <-- вспомогательный декоратор
    public firstName: string | null = null;

    @jsonProperty(String, null) // <-- вспомогательный декоратор
    public lastName: string | null = null;

    @jsonProperty(Date, null) // <-- вспомогательный декоратор
    public birthdate: Date | null = null;

    public getAge(): number | null {
        if (this.birthdate) {
            const ageDifMs = Date.now() - this.birthdate.getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        return null;
    }

    public getFullname(): string | null {
        return [
            this.firstName ?? "",
            this.lastName ?? ""
        ]
            .join(" ")
            .trim() || null;
    }

}