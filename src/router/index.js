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
import MyAgencyList from '../components/page/MyAgency/MyAgencyList'
import AgencyMedicine from '../components/page/MyAgency/AgencyMedicine'
import MyAgencyMedicine from '../components/page/MyAgency/MyAgencyMedicine'
import MyPharmacy from '../components/page/MyPharmacy/MyPharmacy'
import dataPhysician from '../components/page/DataGrid/dataPhysician'
import LastMonthsSales from '../components/page/DataGrid/SalesManagement/LastMonthsSales'
import TheMonthSales from '../components/page/DataGrid/SalesManagement/TheMonthSales'
import AllDrugs from '../components/page/MyPharmacy/AllDrugs'
import Classify from '../components/page/MyPharmacy/Classify'
import  octorMedicine from  '../components/page/MyDoctor/octorMedicine'
import  MyMedicine from  '../components/page/MyDoctor/MyMedicine'


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
    { path: '/MyAgencyList',redirect:'AgencyMedicine', name: 'MyAgencyList', component: MyAgencyList,
       children:[
         { path: '/AgencyMedicine', name: 'AgencyMedicine', component: AgencyMedicine},
         { path: '/MyAgencyMedicine', name: 'MyAgencyMedicine', component: MyAgencyMedicine},
       ]
    },
    { path: '/MyPharmacy',redirect:'AllDrugs', name: 'MyPharmacy', component: MyPharmacy,
      children:[
        { path: '/AllDrugs', name: 'AllDrugs', component: AllDrugs},
        { path: '/Classify', name: 'Classify', component: Classify}
      ]
    },
    { path: '/myDoctorList',redirect:'octorMedicine', name: 'myDoctorList', component: myDoctorList,
       children:[
         { path: '/octorMedicine', name: 'octorMedicine', component: octorMedicine},
         { path: '/MyMedicine', name: 'MyMedicine', component: MyMedicine}
       ]
    },
    { path: '/dataPhysician',redirect: '/TheMonthSales', name: 'dataPhysician', component: dataPhysician,
      children:[
        { path: '/LastMonthsSales', name: 'LastMonthsSales', component: LastMonthsSales},
        { path: '/TheMonthSales',redirect:'', name: 'TheMonthSales', component: TheMonthSales}
      ]
    },




  ]
})
