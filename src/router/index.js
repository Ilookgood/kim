import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import NameCard from '../components/BusinessCard/NameCard'
import MyCenter from '../components/Center/MyCenter'
import ModifyName from '../components/Center/ModifyName'
import sex from '../components/Center/sex'
import age from '../components/Center/age'
import address from '../components/Center/address'
import DataList from '../components/page/DataGrid/datalist'
import MyDoctor from '../components/page/MyDoctor/MyDoctor'
import myDoctorList from '../components/page/MyDoctor/myDoctorList'
import MyAgency from '../components/page/MyAgency/MyAgency'
import MyPharmacy from '../components/page/MyPharmacy/MyPharmacy'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/index', name: 'index', component: index},
    { path: '/NameCard', name: 'NameCard', component: NameCard},
    { path: '/MyCenter', name: 'MyCenter', component:MyCenter},
    { path: '/ModifyName', name: 'ModifyName', component:ModifyName },
    { path: '/sex', name: 'sex', component: sex},
    { path: '/age', name: 'age', component: age},
    { path: '/address', name: 'address', component: address},
    { path: '/DataList', name: 'DataList', component: DataList},
    { path: '/MyDoctor', name: 'MyDoctor', component: MyDoctor},
    { path: '/MyAgency', name: 'MyAgency', component: MyAgency},
    { path: '/MyPharmacy', name: 'MyPharmacy', component: MyPharmacy},
    { path: '/myDoctorList', name: 'myDoctorList', component: myDoctorList}
  ]
})
