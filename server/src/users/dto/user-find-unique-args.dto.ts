import { UserWhereUniqueIdInputDto } from "./user-where-unique-id-input.dto"
import { UserWhereUniqueUsernameInputDto } from "./user-where-unique-username-input.dto"

class UserFindUniqueArgsDto {
  where!: UserWhereUniqueIdInputDto | UserWhereUniqueUsernameInputDto
}

export { UserFindUniqueArgsDto }