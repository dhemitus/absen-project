import * as api from '../../../api'
import { USER_PROFILE_GRABBED, USER_PROFILE_UNGRABBED} from '../../reducers/profile/iprofile'

export const userProfile = () => async dispatch => {
  try {
    let _token = await api.checkLocalUser()

    console.log(_token)
    let _result = await api.getServerUser(_token)

    console.log(_result.data)
    dispatch({
      type: USER_PROFILE_GRABBED,
      data: _result.data
    })
  } catch(e) {
    dispatch({
      type: USER_PROFILE_UNGRABBED,
      data: null
    })
  }
}