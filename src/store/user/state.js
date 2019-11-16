export default () => ({
  token: localStorage.getItem('token') || '',
  tempToken: '',
  restoreCode: ''
})
