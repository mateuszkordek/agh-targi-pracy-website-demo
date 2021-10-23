<template lang="pug">
    div(
        class="contact-form"
        style="height: 100%; min-height: 300px"
    )
        v-form(
            ref="contactForm"
            v-if="!formSent"
        )
            v-row(
                class="pt-3"
            )
                v-col(
                    :cols="phone?12:6"
                    class="py-0"
                )
                    v-text-field(
                        v-model="formData.firstName"
                        outlined
                        label="Imię"
                        :rules="textRules"
                    )
                v-col(
                    :cols="phone?12:6"
                    class="py-0"
                )
                    v-text-field(
                        v-model="formData.lastName"
                        outlined
                        label="Nazwisko"
                        :rules="textRules"
                    )
                v-col(
                    :cols="phone?12:6"
                    class="py-0"
                )
                    v-text-field(
                        v-model="formData.email"
                        outlined
                        label="Adres e-mail"
                        :rules="emailRules"
                    )
                v-col(
                    :cols="phone?12:6"
                    class="py-0"
                )
                    v-text-field(
                        v-model="formData.phone"
                        outlined
                        label="Numer telefonu (opcjonalnie)"
                        :rules="phoneRules"
                    )
                v-col(
                    cols="12"
                    class="py-0"
                )
                    v-textarea(
                        v-model="formData.msg"
                        outlined
                        :rules="textRules"
                        label="Wiadomość"
                    )
            //- v-checkbox(
            //-     v-model="termsAccepted"
            //-     :rules="termsRules"
            //-     required
            //-     class="pl-2 mt-3"
            //- )
            //-     template(v-slot:label)
            //-         span(
            //-             style="color: rgba(0, 0, 0, 0.87)"
            //-         ) Akceptuję
            //-             v-tooltip(bottom) Zobacz regulamin
            //-                 template(v-slot:activator="{ on }")
            //-                     a(
            //-                         href="/regulaminy/polityka-prywatnosci.pdf"
            //-                         target="_blank"
            //-                         @click="event=>event.stopPropagation()"
            //-                         v-on="on"
            //-                         class="mx-1"
            //-                     ) regulamin
            p(
                class="almost-black--text"
            )
                span Wysyłając formularz akceptujesz
                a(
                    :href="getRegulations.terms"
                    target="_blank"
                    class="px-1"
                ) regulamin wydarzenia
                span oraz
                a(
                    :href="getRegulations.cookies"
                    target="_blank"
                    class="pl-1"
                ) politykę prywatności
                span . Administratorem danych osobowych jest Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie (szczegóły w
                a(
                    :href="getRegulations.cookies"
                    target="_blank"
                    class="pl-1"
                ) polityce prywatności
                span ).

            CustomButton(
                @click="validate"
                class="mt-5"
                :style="phone?{'width': '100%'}:{'width': '300px'}"
            ) Wyślij

        div(
            v-else
            class="d-flex align-center justify-center flex-column text-center"
            style="height: 100%"
        )
            h2(
                class="mb-4"
            ) Dziękujemy za wiadomość!
            p Skontaktujemy się z Tobą w najbliższym czasie.


        //- ladowanie
        v-dialog(
            v-model="loadingModal"
            persistent
            max-width="250px"
        )
            v-card(
                class="d-flex align-center justify-center flex-column px-8 py-7"
            )
                v-progress-circular(
                    indeterminate
                    color="primary"
                    class="mb-4"
                )
                h4(
                    class="mb-0"
                ) Proszę czekać

        //- modal z komunikatami
        v-dialog(
            v-model="errorModal"
            persistent
            max-width="450px"
        )
            v-card(
                class="d-flex align-center justify-center flex-column px-8 py-7"
            )
                div(
                    class="mb-4 text-center"
                )
                    h3(
                        class='mb-1'
                    ) Ups. Coś poszło nie tak.
                    div Jeśli problem będzie nadal występował, skontaktuj się z nami.
                CustomButton(
                    @click="errorModal = false"
                ) Zamknij
</template>

<script>
import formRules from '@/plugins/formRules';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    mixins: [formRules],

    data: () => ({
        loadingModal: false,
        errorModal: false,
        formSent: false,
        formData: null,
        termsAccepted: false,
    }),

    computed: {
        ...mapGetters('resources', ['getContact', 'getRegulations']),
    },

    methods: {
        resetForm() {
            this.formData = {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                msg: null,
            };
        },
        validate() {
            // let valid = true
            let valid = this.$refs.contactForm.validate();
            if (valid) {
                this.loadingModal = true;

                let phoneNumber = this.formData.phone
                    ? this.formData.phone
                    : 'Nie podano';
                let mailMsg = `
                    Nadawca: ${this.formData.firstName} ${this.formData.lastName}<br>
                    Telefon: ${phoneNumber}<br>
                    Adres e-mail: ${this.formData.email}<br><br>
                    Treść wiadomości: <br>
                    ${this.formData.msg}
                `;

                axios
                    .post('https://postmanpat.enlighten-webservices.ovh', {
                        template: 'manual',
                        to: this.getContact.email,
                        subject: 'Wiadomość ze strony Targów Pracy',
                        html: mailMsg,
                        fromName: `${this.formData.firstName} ${this.formData.lastName}`,
                        replyTo: this.formData.email,
                    })
                    .then((res) => {
                        // console.log(res);
                        this.loadingModal = false;
                        this.formSent = true;
                    })
                    .catch((err) => {
                        // console.error(err);
                        this.loadingModal = false;
                        this.errorModal = true;
                    });
            }
        },
    },
    created() {
        this.resetForm();
    },
};
</script>