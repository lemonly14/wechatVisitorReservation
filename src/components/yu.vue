<template>
  <div class="appointmentBox">
    <div v-for="list in listSet"
         :key="list.id">
      <group>
        <form-preview :header-label="'访问信息'"
                      :body-items="list"></form-preview>
        <!-- <x-button type="primary"
                  text='详情'
                  @click.native="skip"
                  style="width:40%;display:inline-block;margin-right:5%;"></x-button>
        <x-button type="primary"
                  text="填充"
                  style="width:40%;display:inline-block;"
                  @click.native="getUrl(list)"></x-button> -->
      </group>
    </div>
  </div>
</template>
<script>
import { getResRecordsHistory } from '@/api/api.js'
import {
  XButton,
  Flexbox,
  FlexboxItem,
  Group,
  FormPreview
} from 'vux'
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Group,
    FormPreview
  },
  data () {
    return {
      detailsUrl: '',
      fillurl: '',
      list: [],
      listSet: []

    }
  },
  methods: {
    getUrl (visitorType) {
      console.log(visitorType)
    },
    Render () {
      let vm = this
      getResRecordsHistory().then((res) => {
        console.log(res)
        for (let i = 0; i < res.data.data.length; i++) {
          console.log(res.data.data[i])
          vm.list = []
          let lists = res.data.data[i]
          for (const key in lists) {
            let obj = {}
            if (key === 'resTelephone') {
              obj.label = '员工电话'
            } else if (key === 'visTelephone') {
              obj.label = '访客电话'
            } else if (key === 'resTrueName') {
              obj.label = '员工姓名'
            } else if (key === 'visTrueName') {
              obj.label = '访客姓名'
            } else if (key === 'carNumber') {
              obj.label = '车牌号'
            } else if (key === 'entryTime') {
              obj.label = '来访时间'
            } else if (key === 'visitorType') {
              obj.label = '访问事由'
            } else if (key === 'visNum') {
              obj.label = '访问人数'
            } else if (key === 'identifyNo') {
              obj.label = '身份证号'
            } else if (key === 'url') {
              let url = lists[key]
              this.detailsUrl = url
              console.log('url', url)
              continue
            } else if (key === 'fillUrl') {
              let fillurl = lists[key]
              // this.fillurl = fillurl
              obj.url = 'url'
              console.log('url===========', fillurl)
              continue
            } else {
              continue
            }
            obj.value = lists[key]
            vm.list.push(obj)
            // console.log(key)
            // console.log(lists[key])
          }
          vm.listSet.push(vm.list)
        }
        console.log(1)
        console.log(vm.listSet)
      })
    },
    skip () {
      window.location.href = this.detailsUrl
      // console.log(this.detailsUrl)
    }
  },
  created () {
    this.Render()
  }

}
</script>
<style>
.appointmentBox {
  margin: 15px;
  text-align: center;
}
</style>
