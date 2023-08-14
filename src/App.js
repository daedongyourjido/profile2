import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main.js';
import Login from './login.js';
import SignUp from './signup.js';
import Setting from './setting.js';
import ChangePw from './changePw.js';
import Withdraw from './withdraw.js';
import NeedVerify from './needVerify.js';
import Verify from './verify.js';
import FindPw from './findPw.js';
import SuccessWithdraw from './successWithdraw.js';
import NeedResetPw from './needResetPw.js';
import ResetPw from './resetPw.js';
import AppProfile from './App_profile.js';
import FollowerList from './follwer';
import FollowingList from './following';

import Place from './board/Place'
import MyMap from './mymap';
import ChangeProfile from './profileChange';
import { List } from '@mui/material';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/setting' element={<Setting />} />
        <Route path="/setting/change" element={<ChangePw />} />
        <Route path='/setting/withdraw' element={<Withdraw />} />
        <Route path='/setting/changeprofile' element={<ChangeProfile/>}/>
        <Route path='/verify/send' element={<NeedVerify />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/find' element={<FindPw />} />
        <Route path='/setting/withdraw/success' element={<SuccessWithdraw />} />
        <Route path='find/send' element={<NeedResetPw />} />
        <Route path='find/reset' element={<ResetPw />} />
        <Route path='/profile' element={<AppProfile />} />
        <Route path='/following' element={<FollowingList />} />
        <Route path='/follower' element={<FollowerList />} />
        <Route path='/mymap' element={<MyMap />} />

        {/** route 동적 이동 **/}
        <Route path={'/board/:place'} element={<Place/>}/>
        <Route path={'/mymap/:List'} element={<List/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;