export const CONFIG = Object.freeze({
    ENCRYPT_DECRYPT:{
        SECRET_KEY:"LosAdminSecret"
    },
    EMAIL:{
        AUTH:{
            username:"velanetpark@gmail.com",
            password:"8508154348"
        },
        FRONTEND_EMAIL_VERIFY_LINK:"emailverification/",
        FRONTEND_RESET_PASSWORD_LINK:"resetpassword/",
        VERIFIED_KEY:"verified",
        FORGOT_PWD_LINK_EXPIRY:24, // in hours
        // FRONTEND_HOST:"http://localhost:9005/",
        // BACKEND_HOST:"http://localhost:8085/"
        FRONTEND_HOST:"http://3.10.4.250:9005/",
        BACKEND_HOST:"http://3.10.4.250:8085/"
    },
    SMS:{
        HOST:"http://msg.parinhitech.com/api/sendhttp.php?",
        API:"37114AW6BnXsw604b3ac1",
        SENDERID:"NEWMSG",
        ROUTE:"6"
    },
    USER:{
        PROFILE_IMG_PATH:"D://Results"
    },
    DEFAULTDATA:{
        // BACKEND_CLIENT_HOST: "http://localhost:8081/"
        BACKEND_CLIENT_HOST: "http://52.56.129.79:8081/"
    },
    KARZA_BACKEND_HOST:"https://testapi.karza.in/v3/",
    WLH_BACKEND_HOST:"https://abhfl-apis.client-sb.wlh.rtb.services/",
    // ADMIN_BACKEND_HOST:"http://localhost:8080/master-service/api/",
    ADMIN_BACKEND_HOST:"http://13.40.112.229:8080/master-service/api/",
    // CLIENT_BACKEND_HOST:"http://localhost:8081/application-service/api/",
    CLIENT_BACKEND_HOST:"http://52.56.129.79:8081/application-service/api/",
    // VERIFY_BACKEND_HOST:"http://localhost:8082/integration-service/api/",
    VERIFY_BACKEND_HOST:"http://3.8.197.170:8082/integration-service/api/",

    // VERIFY_BACKEND_HOST_PHONE_GEN_OTP:"http://localhost:8082/integration-service/api/phone-otp",
    // VERIFY_BACKEND_HOST_PHONE_VERIFY_OTP:"http://localhost:8082/integration-service/api/otp-verify",
    // VERIFY_BACKEND_HOST_GMAIL_OTP:"http://localhost:8082/integration-service/api/gmail-otp",
    // VERIFY_BACKEND_HOST_GMAIL_VERIFY_OTP:"http://localhost:8082/integration-service/api/gmailotp-verify",
    // VERIFY_BACKEND_HOST_AAHAAR_CARD_POPULATE:"http://localhost:8082/integration-service/api/aadhaar-otp",
    // VERIFY_BACKEND_HOST_AAHAAR_CARD_VERIFY:"http://localhost:8082/integration-service/api/Dsa-aadhaar-xml",
    // VERIFY_BACKEND_HOST_PAN_CARD_VERIFY: "http://localhost:8082/integration-service/api/pancard",

    VERIFY_BACKEND_HOST_PHONE_GEN_OTP:"http://3.8.197.170:8082/integration-service/api/phone-otp",
    VERIFY_BACKEND_HOST_PHONE_VERIFY_OTP:"http://3.8.197.170:8082/integration-service/api/otp-verify",
    VERIFY_BACKEND_HOST_GMAIL_OTP:"http://3.8.197.170:8082/integration-service/api/gmail-otp",
    VERIFY_BACKEND_HOST_GMAIL_VERIFY_OTP:"http://3.8.197.170:8082/integration-service/api/gmailotp-verify",
    VERIFY_BACKEND_HOST_AAHAAR_CARD_POPULATE:"http://3.8.197.170:8082/integration-service/api/aadhaar-otp",
    VERIFY_BACKEND_HOST_AAHAAR_CARD_VERIFY:"http://3.8.197.170:8082/integration-service/api/Dsa-aadhaar-xml",
    VERIFY_BACKEND_HOST_PAN_CARD_VERIFY: "http://3.8.197.170:8082/integration-service/api/pancard",

    // EZFLO_BACKEND_HOST:"http://localhost:8086"
    EZFLO_BACKEND_HOST:"http://3.8.18.109:8086"

});
