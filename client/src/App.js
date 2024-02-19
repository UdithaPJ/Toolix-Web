

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // import Routes and Route
import First from './First'; // import your First component
import LoginSignup from './LoginSignup'; // import your LoginSignup component
import ForgotUsername from './ForgotUsername';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordChange from './ForgotPasswordChange';
import UserPage from './UserPage';
import ChangePassword from './ChangePassword';
import ErrorNameOrPasswordInLoginSignupPage from './ErrorNameOrPasswordInLoginSignupPage';
import ErrorInRecoverPassword from './ErrorInRecoverPassword';
import ErrorInForgotPasswordChange from './ErrorInForgotPasswordChange';
import ErrorInForgotUserName from './ErrorInForgotUserName';
import EmailSendInForgotUserNamePage from './EmailSendInForgotUserNamePage';
import EmailSendInForgotPasswordPage from './EmailSendInForgotPasswordPage';
import PasswordChangeSuccessful from './PasswordChangeSuccessful';
import ErrorInForgotPasswordChangOTP from './ErrorInForgotPasswordChangOTP';
import ErrorInChangePasswordType1 from './ErrorInChangePasswordType1';
import ErrorInChangePasswordType2 from './ErrorInChangePasswordType2';
import ErrorInChangePasswordType3 from './ErrorInChangePasswordType3';
import DeleteAccount from './DeleteAccount';
import ErrorInDeleteAccountType1 from './ErrorInDeleteAccountType1';
import ErrorInDeleteAccountType2 from './ErrorInDeleteAccountType2';
import DeleteAccountSuccessful from './DeleteAccountSuccessful';
import InstructerPage from './InstructerPage';
import AdminPage from './AdminPage';
import ErrorUserNameAllreadyHaveAccount from './ErrorUserNameAllreadyHaveAccount';
import ToolIsAvailable from './ToolIsAvailable';
import ToolIsNotAvailable from './ToolIsNotAvailable';
import ErrorInSearchTool from './ErrorInSearchTool';
import AllToolList from './AllToolList';
import ConfermAddTool from './ConfermAddTool';
import AddToolSuccessful from './AddToolSuccessful';
import ErrorInAddToolFieldEmpty from './ErrorInAddToolFieldEmpty';
import ErrorInAddToolIDAllreadyHave from './ErrorInAddToolIDAllreadyHave';
import ErrorInRemoveToolToolNotInDatabase from './ErrorInRemoveToolToolNotInDatabase';
import ErrorInRemoveToolFieldEmpty from './ErrorInRemoveToolFieldEmpty';
import ConfermRemoveTool from './ConfermRemoveTool';
import RemoveToolSuccessful from './RemoveToolSuccessful';
import ToolCheckIn from './ToolCheckIn';
import ErrorInToolCheackInType1 from './ErrorInToolCheackInType1';
import ErrorInToolCheackInType2 from './ErrorInToolCheackInType2';
import ConfermToolCheackIn from './ConfermToolCheackIn';
import CheackInToolSuccessful from './CheackInToolSuccessful';
import ToolCheackOut from './ToolCheackOut';
import ErrorInToolCheackOutType1 from './ErrorInToolCheackOutType1';
import ErrorInToolCheackOutType2 from './ErrorInToolCheackOutType2';
import ErrorInToolCheackOutType3 from './ErrorInToolCheackOutType3';
import ConffermToolCheackOut from './ConffermToolCheackOut';
import CheackOutToolSuccessful from './CheackOutToolSuccessful';
import ToolTraking from './ToolTraking';
import ErrorInToolTracking from './ErrorInToolTracking';
import TrackToolDetails from './TrackToolDetails';
//import { UserProvider } from './UserContext';

function App() {
  return (
    <div>
      {/* Define your routes within a Routes component */}
      {/* <UserProvider>
      <LoginSignup />
      </UserProvider> */}
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<First />} />
        <Route path="/forgotusername" element={<ForgotUsername />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/forgotpasswordchange" element={<ForgotPasswordChange/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/errorNameOrPassword" element={<ErrorNameOrPasswordInLoginSignupPage/>}/>
        <Route path="/errorRecoverPassword" element={<ErrorInRecoverPassword/>}/>
        <Route path="/errorForgotPasswordChange" element={<ErrorInForgotPasswordChange/>}/>
        <Route path="/errorForgotUserName" element={<ErrorInForgotUserName/>}/>
        <Route path="/emailSendInForgotUserNamePage" element={<EmailSendInForgotUserNamePage/>}/>
        <Route path="/emailSendInForgotPasswordPage" element={<EmailSendInForgotPasswordPage/>}/>
        <Route path="/passwordChangeSuccessful" element={<PasswordChangeSuccessful/>}/>
        <Route path="/errorInForgotPasswordChangeOTP" element={<ErrorInForgotPasswordChangOTP/>}/>
        <Route path="/errorInChangePasswordType1" element={<ErrorInChangePasswordType1/>}/>
        <Route path="/errorInChangePasswordType2" element={<ErrorInChangePasswordType2/>}/>  
        <Route path="/errorInChangePasswordType3" element={<ErrorInChangePasswordType3/>}/>      
        <Route path="/deleteAccount" element={<DeleteAccount/>}/>      
        <Route path="/deleteAccountErrorType1" element={<ErrorInDeleteAccountType1/>}/>
        <Route path="/deleteAccountErrorType2" element={<ErrorInDeleteAccountType2/>}/>
        <Route path="/deleteAccountSuccessful" element={<DeleteAccountSuccessful/>}/>
        <Route path="/instructerPage" element={<InstructerPage/>}/>
        <Route path="/adminPage" element={<AdminPage/>}/>
        <Route path="/userNameAllreadyHaveAccount" element={<ErrorUserNameAllreadyHaveAccount/>}/>
        <Route path="/toolIsAvailable" element={<ToolIsAvailable/>}/>      
        <Route path="/toolIsNotAvailable" element={<ToolIsNotAvailable/>}/>
        <Route path="/errorInSearchTool" element={<ErrorInSearchTool/>}/>
        <Route path="/allToolList" element={<AllToolList/>}/>
        <Route path="/confermAddTool" element={<ConfermAddTool/>}/>
        <Route path="/addToolSuccessful" element={<AddToolSuccessful/>}/>
        <Route path="/errorInAddToolFieldEmpty" element={<ErrorInAddToolFieldEmpty/>}/>
        <Route path="/errorInAddToolIDAllreadyHave" element={<ErrorInAddToolIDAllreadyHave/>}/>
        <Route path="/errorInRemoveToolToolInDatabase" element={<ErrorInRemoveToolToolNotInDatabase/>}/>
        <Route path="/errorInRemoveToolFliedEmpty" element={<ErrorInRemoveToolFieldEmpty/>}/>
        <Route path="/confermRemoveTool" element={<ConfermRemoveTool/>}/>
        <Route path="/removeToolSuccessful" element={<RemoveToolSuccessful/>}/>
        <Route path="/toolCheackIn" element={<ToolCheckIn/>}/>
        <Route path="/errorInToolCheackingType1" element={<ErrorInToolCheackInType1/>}/>
        <Route path="/errorInToolCheackingType2" element={<ErrorInToolCheackInType2/>}/>
        <Route path="/ConfermToolCheacking" element={<ConfermToolCheackIn/>}/>
        <Route path="/cheackInToolSuccessful" element={<CheackInToolSuccessful/>}/>
        <Route path="/toolCheackOut" element={<ToolCheackOut/>}/>
        <Route path="/errorInToolCheackOutType1" element={<ErrorInToolCheackOutType1/>}/>
        <Route path="/errorInToolCheackOutType2" element={<ErrorInToolCheackOutType2/>}/>
        <Route path="/errorInToolCheackOutType3" element={<ErrorInToolCheackOutType3/>}/>
        <Route path="/confermToolCheackOut" element={<ConffermToolCheackOut/>}/>
        <Route path="/cheackOutToolSuccessful" element={<CheackOutToolSuccessful/>}/>
        <Route path="/toolTracking" element={<ToolTraking/>}/>
        <Route path="/errorInToolTracking" element={<ErrorInToolTracking/>}/>
        <Route path="/trackToolDetails" element={<TrackToolDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
