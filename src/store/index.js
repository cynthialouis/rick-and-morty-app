import Vue from 'vue'
import Vuex from 'vuex'
import Characters from './modules/Characters.module'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	modules: {
		Characters,
	},
})
