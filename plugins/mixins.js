import Vue from "vue";
import moment from 'moment-timezone'
import { mapGetters } from 'vuex'

let Mixins = {
    computed: {
        ...mapGetters('resources', ['getFairSettings']),
        ...mapGetters('accessibility', ['getWcagStep']),
        isDark() {
            return this.$vuetify.theme.dark
        },
    },

    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },

    methods: {
        open(link) {
            window.open(link, "_blank")
        },
        goToCTAPage() {
            if (!!this.getFairSettings.callToAction.href) window.open(this.getFairSettings.callToAction.href, '_blank')
        },
        getAllEmailAdresses(exhibitor) {
            let arr = exhibitor.contact.otherEmailAddresses.map(a => a.email)
            if (!!exhibitor.contact.mainEmailAddress) {

                arr.unshift(exhibitor.contact.mainEmailAddress)
            }
            return arr
        },
        getLast3(arr) {
            return arr.slice(0, 3)
        },
        goToContactForm() {
            this.$router.push('/dla-pracodawcow')
            setTimeout(() => this.$vuetify.goTo('#contact-section'), 500);
        },

        // moment-timezone.js methods
        isDateToday(date) {
            const todaysDate = moment().format('DD/MM/YYYY');
            return todaysDate == date;
        },

        getDayFromDate(date) {
            return moment(date, 'DD/MM/YYYY').format('DD');
        },

        getWeekDayFromDate(date) {
            return date == '15/03/2021' ? 'poniedziałek' : 'wtorek';
        },

        getPLTimeFromTimestamp(timestamp) {
            // sluzy tylko do wyswietlania w programie
            return moment(timestamp, 'x').tz("Europe/Warsaw").format("HH:mm");
        },

        removeWidowsAndOrphans() {
            const lettersToReplace = ["a", "i", "o", "u", "w", "z", "A", "I", "O", "U", "W", "Z"]
            document.querySelectorAll('p').forEach(a => {
                let textReplace = a.innerHTML

                for (var i = 0; i < lettersToReplace.length; i++) {
                    let textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
                    textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
                }
                a.innerHTML = textReplace
            })
        }

    }
}


Vue.mixin(Mixins);
