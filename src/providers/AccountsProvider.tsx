import { PropsWithChildren, createContext, use } from 'react';
import { personalInfoData } from 'data/account/personal-info';
import { PersonalInfo } from 'types/accounts';

interface AccountsContextInterface {
  personalInfo: PersonalInfo;
}

export const AccountsContext = createContext({} as AccountsContextInterface);

const AccountsProvider = ({ children }: PropsWithChildren) => {
  const personalInfoValues: PersonalInfo = personalInfoData;

  return (
    <AccountsContext
      value={{
        personalInfo: personalInfoValues,
      }}
    >
      {children}
    </AccountsContext>
  );
};

export const useAccounts = () => use(AccountsContext);

export default AccountsProvider;
