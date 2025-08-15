import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Дюна",
    url: "https://upload.wikimedia.org/wikipedia/ru/f/f1/%D0%94%D1%8E%D0%BD%D0%B0_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    kinopoisk: "https://www.kinopoisk.ru/film/409424/",
  },
  {
    id: 2,
    name: "Отель Гранд Будапешт",
    url: "https://s1.afisha.ru/mediastorage/24/b5/687ddb862d9443df956e0cf2b524.jpg",
    kinipoisk: "https://www.kinopoisk.ru/film/683999/",
  },
  {
    id: 3,
    name: "Вечное сияние чистого разума",
    url: "https://kinopoisk-ru.clstorage.net/1y5H5q171/45f9175M/cuPMC9KmYnnBNgq_C73gg02tDb1vCe5Mb8iahJ3-dHmcImGnsgxTNRtXPazDRw4Q80DailNYAcdbgjIcfrlPveYn6V-ns5bIEfNvXo8tlVYdybwY2s3_-Or821Wo-5GLbyDihSUuMMeZVfu49wN_xSbVLo4zmNWC_1aTC11426kQcY0YAxbQTwG2KgrYr5PirUwqfd24iG4O2_7mzd6m-c1R4bRVj1FWmURL6xTA6Adn1J7ccMk0kTjmESnvHegKYLMPOvHWAx_DlQopOk1g00_Myk0tKmgvnLp-9n4cdAhMkXO3tp9DhisHS-uksylnZidenjPYdkAKJsPI7-2J6mHjnYrQRHMMIEUpOWl-goBenlpNf0ronm75LCUfL9Taf3NjlAaNkod7Bavr1uBZ9xQHvmwCytSRePegKL69-AsgkFx6QDUjDgMGi7qZD6Cjjqw7b34K6lyd6P1nv60EejzwcEc2PaMlSecp-RThaAV3Vsy-sfnGgjl2gSsMTAuow-BvmID2YN8S5VvpqJ_hIp5-CHwviOqtbpmO1yzt98g8s8G1lYxRVqt2CPqXQqpmxMdePhGoZKN5h_K4vx3o-GATruqj5RM_A2Z5q9qtYiN-_Hn_fSh6_S-o7ibeLbUK3BDS1ST9wqe75-jYBoN7RhXX3Qwj6pXi-1cimP3c6vmAclxZkqUx_wEUuZlav6FDnX_Zvg-JmP1dOLwk7Ey2Co6QkuSknkFlGoYp2SfRSGT2ZE1-Yms3Mxi18zvNzms4koKMWND0Ia9RZOnouS6hAW-Pi61d6ojMTMksFT8sFOv-Q5G3h1yy93nlWhm3Yaolh8ZOHxIpZhEJpJI53r94CcAQP7iCpWHuQIZ46qq_QKJvrQkcrYmIru1pT0advOTYjfKDNDTu0ReIBDhJJiLpFUS2jxxzqWaCKqYRGYxfSBnQAp5r4tRwXIN1WylqnxHinxxp7I56ez8tSHymffwVmgxj4-alrGEWK-Vb6WXjGVU31L0_UvvGcimnk2sMTioIotEuygPEEe2gRuubm09QAYy-Wsyditmub2lupm5-NFnssOEUNf1Ddbhlu7lWgXsFNecuLwBJRdJ5xyCofi55KNBD_ZsDp-IvU_Rq21o9soKtLGv9_9raTD3K_EaNnMa6r0CzxSVPwRYKZiubRwCZZfR3_X1yeDaRaXYiaS-9yimDUy9ogPbD3TOGCThKr5ARj1y5DU46uM692PzkHA3H-u6hcaWFrWGmSURb6QcRGzSUZlzvkhvEk9tmMHi-LOv70gLPCgElkT9z9Lr6Sv6CQRyv6C0vaureP9uNVTxuJikPU8OH9gyztUm0anln8ZiEpWdt3_PqZeI75QC5PN2IKYAAnxmwp6AvoPSba9q9gzI9z-nPD9oYjg9oTyRODfRY_nPxtWRMEUdZdHtrdxAaF6SnLC0hGIWSGSQxOuzMKNrgU55rwETQ71C1ePibTHJST3273ux4y9-9u19UHY60Km6AoDY33PNlWaRYWyaimEfklayNssnkUuk1cnvt_gmrEEDsChOWMG2jttnJu43hAzydKy1vmuvMPLicJg5Px6n-4CBkV8-jlctlmntFYHq25yRcbQOKNKHophFKbF6YaQLS_UpSpAMsQrfoyoruUMNPTEvN35vY7x35jqTfrtQpzODgZcf_4vV51ynrpSEoB6clT-xzySeTaUXS2zwuWhjz4b9rEfXw3FFEOUqJbnJTPa67HL-4eG8dqy8mjk7kSl2R8_Z0v2MFGjTrmfViKKTUdQyfg9iXghjlYWq_rhnosABeWvCFMR6BVoma6P-y4208mX8N6LuvTrr-hO0sdfgMYuCFFp-CZ_uUWmslQ4vn9UZtHHOKdsBoNcM4Htw66_OhvLgSRYMvsPZ5uol9EONPHOttPXornkzJvWaNXAYJP8OChGYcUmQYtEpp1gDpVxa1nxxB20bzaMdwCYwvW9uBg_xLkHVTXnG2qLqbTpNwXYxaPL_YCB2_2H6kD54l-swwIEXmvfJ0W3YraVcg62TUFX7-Ylh08Uo1Ion-3onpouO9GFOns-0AtHrp-48QoC3dyf29-YgOD1k9ZE88t9qPgeGWJ76htmvkG8t28PoHV2XdDDH7B7MIhrDbD_-KiuHQTEugNBDMspXKyrpcUcCNrpn9HdsLjVwbrnVNvoboXJAjxae_kHV6F5tqFGL4R6RlLq4xy0bhOJaiaw_9uZgCwi2bM7XRDiNUWysoTXDDHpxbDg-JOOxtiUyVPSx2K-xwYkfELEHVWGb5GUYgafS1Rk3ecuingGrlcyjeHpjZIpPPKtKG4FwzVlkYmm-QII2MuhysSjntPVkdFQ59xqh-YiM2Ve_BpUp0-tjUMVm3JNbsLWN458AphyAYfs1b6yGgf5kwBEIvwQapCuo84FJv38nfDbhoTK2I7qSePqW57kJgZJRvooXbZho4FlJZlXRVTF1jWwRwCZXwmd5eqpgSMHw44SYB_zG0iqk4XaJB_s25bf2a6H2ciN7G7373ix7DwPWVngN3-_b6WNRiG8UUV41-Uhs2E3kVk3punPs4c6CNm4B2Y89BZ2u6en-AAa2OOTzPmyqvP-rf9I8NhEvtoYHVNmxzRomUSRj0EPmnJtZsXkHY1yFK91LIX4yZqNOiLPowRuGuU1QL21lesIPMjOuOv5p6Pr9Z72ceLmRJPcLR1DXegKXbRuu45pA7FqZ1Tk-w6ObSK3aiaG5eufhiQ_zqcdewHKCW2Rp7HFIzrx6abx57Cq9_CU6GfA2Em44Dw4RkrDOkOgYqeKcyO1aGBI0dgypXsct2gJnOrniJgaAfmOEVAZ2hJjr6ip2iIS-Nye3-Goh_T0n-Z32_F-qP4NBlF_wyhzn1q5ukkqs01xVeTRN4p9N7p1BovmyqyNIyzNgSdAIOgcb7GXhu0BGOngttTAj4_V8rzRZ_XeS6LPGg10b88tZZRUspByB7dfRUzC_COCaCCcbQA",
    kinopoisk: "https://www.kinopoisk.ru/film/5492/",
  },
  {
    id: 4,
    name: "Скотт Пиллигрим против всех",
    url: "https://kinopoisk-ru.clstorage.net/1y5H5q171/45f9175M/cuPMC9KmYnnBNgq_C73gg02tDb1vCe5Mb8iahJ3-dHmcImGnsgxTNRtXPayTFy6wo9DKijNdJPc-wuJMfumP_cYn6S_3w5NYoaMvXs9t4FZ92QxNmlj_2Or821Wo-5GLbyDihSUuMMeZVfu49wN_xSbVLo4zmNWC_1aTC11426kQcY0YAxbQTwG2KgrYr5PirUwqfd24iG4O2_7mzd6m-c1R4bRVj1FWmURL6xTA6Adn1J7ccMk0kTjmESnvHegKYLMPOvHWAx_DlQopOk1g00_Myk0tKmgvnLp-9n4cdAhMkXO3tp9DhisHS-uksylnZidenjPYdkAKJsPI7-2J6mHjnYrQRHMMIEUpOWl-goBenlpNf0ronm75LCUfL9Taf3NjlAaNkod7Bavr1uBZ9xQHvmwCytSRePegKL69-AsgkFx6QDUjDgMGi7qZD6Cjjqw7b34K6lyd6P1nv60EejzwcEc2PaMlSecp-RThaAV3Vsy-sfnGgjl2gSsMTAuow-BvmID2YN8S5VvpqJ_hIp5-CHwviOqtbpmO1yzt98g8s8G1lYxRVqt2CPqXQqpmxMdePhGoZKN5h_K4vx3o-GATruqj5RM_A2Z5q9qtYiN-_Hn_fSh6_S-o7ibeLbUK3BDS1ST9wqe75-jYBoN7RhXX3Qwj6pXi-1cimP3c6vmAclxZkqUx_wEUuZlav6FDnX_Zvg-JmP1dOLwk7Ey2Co6QkuSknkFlGoYp2SfRSGT2ZE1-Yms3Mxi18zvNzms4koKMWND0Ia9RZOnouS6hAW-Pi61d6ojMTMksFT8sFOv-Q5G3h1yy93nlWhm3Yaolh8ZOHxIpZhEJpJI53r94CcAQP7iCpWHuQIZ46qq_QKJvrQkcrYmIru1pT0advOTYjfKDNDTu0ReIBDhJJiLpFUS2jxxzqWaCKqYRGYxfSBnQAp5r4tRwXIN1WylqnxHinxxp7I56ez8tSHymffwVmgxj4-alrGEWK-Vb6WXjGVU31L0_UvvGcimnk2sMTioIotEuygPEEe2gRuubm09QAYy-Wsyditmub2lupm5-NFnssOEUNf1Ddbhlu7lWgXsFNecuLwBJRdJ5xyCofi55KNBD_ZsDp-IvU_Rq21o9soKtLGv9_9raTD3K_EaNnMa6r0CzxSVPwRYKZiubRwCZZfR3_X1yeDaRaXYiaS-9yimDUy9ogPbD3TOGCThKr5ARj1y5DU46uM692PzkHA3H-u6hcaWFrWGmSURb6QcRGzSUZlzvkhvEk9tmMHi-LOv70gLPCgElkT9z9Lr6Sv6CQRyv6C0vaureP9uNVTxuJikPU8OH9gyztUm0anln8ZiEpWdt3_PqZeI75QC5PN2IKYAAnxmwp6AvoPSba9q9gzI9z-nPD9oYjg9oTyRODfRY_nPxtWRMEUdZdHtrdxAaF6SnLC0hGIWSGSQxOuzMKNrgU55rwETQ71C1ePibTHJST3273ux4y9-9u19UHY60Km6AoDY33PNlWaRYWyaimEfklayNssnkUuk1cnvt_gmrEEDsChOWMG2jttnJu43hAzydKy1vmuvMPLicJg5Px6n-4CBkV8-jlctlmntFYHq25yRcbQOKNKHophFKbF6YaQLS_UpSpAMsQrfoyoruUMNPTEvN35vY7x35jqTfrtQpzODgZcf_4vV51ynrpSEoB6clT-xzySeTaUXS2zwuWhjz4b9rEfXw3FFEOUqJbnJTPa67HL-4eG8dqy8mjk7kSl2R8_Z0v2MFGjTrmfViKKTUdQyfg9iXghjlYWq_rhnosABeWvCFMR6BVoma6P-y4208mX8N6LuvTrr-hO0sdfgMYuCFFp-CZ_uUWmslQ4vn9UZtHHOKdsBoNcM4Htw66_OhvLgSRYMvsPZ5uol9EONPHOttPXornkzJvWaNXAYJP8OChGYcUmQYtEpp1gDpVxa1nxxB20bzaMdwCYwvW9uBg_xLkHVTXnG2qLqbTpNwXYxaPL_YCB2_2H6kD54l-swwIEXmvfJ0W3YraVcg62TUFX7-Ylh08Uo1Ion-3onpouO9GFOns-0AtHrp-48QoC3dyf29-YgOD1k9ZE88t9qPgeGWJ76htmvkG8t28PoHV2XdDDH7B7MIhrDbD_-KiuHQTEugNBDMspXKyrpcUcCNrpn9HdsLjVwbrnVNvoboXJAjxae_kHV6F5tqFGL4R6RlLq4xy0bhOJaiaw_9uZgCwi2bM7XRDiNUWysoTXDDHpxbDg-JOOxtiUyVPSx2K-xwYkfELEHVWGb5GUYgafS1Rk3ecuingGrlcyjeHpjZIpPPKtKG4FwzVlkYmm-QII2MuhysSjntPVkdFQ59xqh-YiM2Ve_BpUp0-tjUMVm3JNbsLWN458AphyAYfs1b6yGgf5kwBEIvwQapCuo84FJv38nfDbhoTK2I7qSePqW57kJgZJRvooXbZho4FlJZlXRVTF1jWwRwCZXwmd5eqpgSMHw44SYB_zG0iqk4XaJB_s25bf2a6H2ciN7G7373ix7DwPWVngN3-_b6WNRiG8UUV41-Uhs2E3kVk3punPs4c6CNm4B2Y89BZ2u6en-AAa2OOTzPmyqvP-rf9I8NhEvtoYHVNmxzRomUSRj0EPmnJtZsXkHY1yFK91LIX4yZqNOiLPowRuGuU1QL21lesIPMjOuOv5p6Pr9Z72ceLmRJPcLR1DXegKXbRuu45pA7FqZ1Tk-w6ObSK3aiaG5eufhiQ_zqcdewHKCW2Rp7HFIzrx6abx57Cq9_CU6GfA2Em44Dw4RkrDOkOgYqeKcyO1aGBI0dgypXsct2gJnOrniJgaAfmOEVAZ2hJjr6ip2iIS-Nye3-Goh_T0n-Z32_F-qP4NBlF_wyhzn1q5ukkqs01xVeTRN4p9N7p1BovmyqyNIyzNgSdAIOgcb7GXhu0BGOngttTAj4_V8rzRZ_XeS6LPGg10b88tZZRUspByB7dfRUzC_COCaCCcbQA",
    kinopoisk: "https://www.kinopoisk.ru/film/105948/",
  },
  {
    id: 5,
    name: "Моана",
    url: "https://kinopoisk-ru.clstorage.net/1y5H5q171/45f9175M/cuPMC9KmYnnBNgq_C73gg02tDb1vCe5Mb8iahJ3-dHmcImGnsgxTNRtXPayTFw4g8wC6j1ZtJKJekuIce6y_zeYn7DqCg5bNZPNvXs-4tVZtnMwICsiKiOr821Wo-5GLbyDihSUuMMeZVfu49wN_xSbVLo4zmNWC_1aTC11426kQcY0YAxbQTwG2KgrYr5PirUwqfd24iG4O2_7mzd6m-c1R4bRVj1FWmURL6xTA6Adn1J7ccMk0kTjmESnvHegKYLMPOvHWAx_DlQopOk1g00_Myk0tKmgvnLp-9n4cdAhMkXO3tp9DhisHS-uksylnZidenjPYdkAKJsPI7-2J6mHjnYrQRHMMIEUpOWl-goBenlpNf0ronm75LCUfL9Taf3NjlAaNkod7Bavr1uBZ9xQHvmwCytSRePegKL69-AsgkFx6QDUjDgMGi7qZD6Cjjqw7b34K6lyd6P1nv60EejzwcEc2PaMlSecp-RThaAV3Vsy-sfnGgjl2gSsMTAuow-BvmID2YN8S5VvpqJ_hIp5-CHwviOqtbpmO1yzt98g8s8G1lYxRVqt2CPqXQqpmxMdePhGoZKN5h_K4vx3o-GATruqj5RM_A2Z5q9qtYiN-_Hn_fSh6_S-o7ibeLbUK3BDS1ST9wqe75-jYBoN7RhXX3Qwj6pXi-1cimP3c6vmAclxZkqUx_wEUuZlav6FDnX_Zvg-JmP1dOLwk7Ey2Co6QkuSknkFlGoYp2SfRSGT2ZE1-Yms3Mxi18zvNzms4koKMWND0Ia9RZOnouS6hAW-Pi61d6ojMTMksFT8sFOv-Q5G3h1yy93nlWhm3Yaolh8ZOHxIpZhEJpJI53r94CcAQP7iCpWHuQIZ46qq_QKJvrQkcrYmIru1pT0advOTYjfKDNDTu0ReIBDhJJiLpFUS2jxxzqWaCKqYRGYxfSBnQAp5r4tRwXIN1WylqnxHinxxp7I56ez8tSHymffwVmgxj4-alrGEWK-Vb6WXjGVU31L0_UvvGcimnk2sMTioIotEuygPEEe2gRuubm09QAYy-Wsyditmub2lupm5-NFnssOEUNf1Ddbhlu7lWgXsFNecuLwBJRdJ5xyCofi55KNBD_ZsDp-IvU_Rq21o9soKtLGv9_9raTD3K_EaNnMa6r0CzxSVPwRYKZiubRwCZZfR3_X1yeDaRaXYiaS-9yimDUy9ogPbD3TOGCThKr5ARj1y5DU46uM692PzkHA3H-u6hcaWFrWGmSURb6QcRGzSUZlzvkhvEk9tmMHi-LOv70gLPCgElkT9z9Lr6Sv6CQRyv6C0vaureP9uNVTxuJikPU8OH9gyztUm0anln8ZiEpWdt3_PqZeI75QC5PN2IKYAAnxmwp6AvoPSba9q9gzI9z-nPD9oYjg9oTyRODfRY_nPxtWRMEUdZdHtrdxAaF6SnLC0hGIWSGSQxOuzMKNrgU55rwETQ71C1ePibTHJST3273ux4y9-9u19UHY60Km6AoDY33PNlWaRYWyaimEfklayNssnkUuk1cnvt_gmrEEDsChOWMG2jttnJu43hAzydKy1vmuvMPLicJg5Px6n-4CBkV8-jlctlmntFYHq25yRcbQOKNKHophFKbF6YaQLS_UpSpAMsQrfoyoruUMNPTEvN35vY7x35jqTfrtQpzODgZcf_4vV51ynrpSEoB6clT-xzySeTaUXS2zwuWhjz4b9rEfXw3FFEOUqJbnJTPa67HL-4eG8dqy8mjk7kSl2R8_Z0v2MFGjTrmfViKKTUdQyfg9iXghjlYWq_rhnosABeWvCFMR6BVoma6P-y4208mX8N6LuvTrr-hO0sdfgMYuCFFp-CZ_uUWmslQ4vn9UZtHHOKdsBoNcM4Htw66_OhvLgSRYMvsPZ5uol9EONPHOttPXornkzJvWaNXAYJP8OChGYcUmQYtEpp1gDpVxa1nxxB20bzaMdwCYwvW9uBg_xLkHVTXnG2qLqbTpNwXYxaPL_YCB2_2H6kD54l-swwIEXmvfJ0W3YraVcg62TUFX7-Ylh08Uo1Ion-3onpouO9GFOns-0AtHrp-48QoC3dyf29-YgOD1k9ZE88t9qPgeGWJ76htmvkG8t28PoHV2XdDDH7B7MIhrDbD_-KiuHQTEugNBDMspXKyrpcUcCNrpn9HdsLjVwbrnVNvoboXJAjxae_kHV6F5tqFGL4R6RlLq4xy0bhOJaiaw_9uZgCwi2bM7XRDiNUWysoTXDDHpxbDg-JOOxtiUyVPSx2K-xwYkfELEHVWGb5GUYgafS1Rk3ecuingGrlcyjeHpjZIpPPKtKG4FwzVlkYmm-QII2MuhysSjntPVkdFQ59xqh-YiM2Ve_BpUp0-tjUMVm3JNbsLWN458AphyAYfs1b6yGgf5kwBEIvwQapCuo84FJv38nfDbhoTK2I7qSePqW57kJgZJRvooXbZho4FlJZlXRVTF1jWwRwCZXwmd5eqpgSMHw44SYB_zG0iqk4XaJB_s25bf2a6H2ciN7G7373ix7DwPWVngN3-_b6WNRiG8UUV41-Uhs2E3kVk3punPs4c6CNm4B2Y89BZ2u6en-AAa2OOTzPmyqvP-rf9I8NhEvtoYHVNmxzRomUSRj0EPmnJtZsXkHY1yFK91LIX4yZqNOiLPowRuGuU1QL21lesIPMjOuOv5p6Pr9Z72ceLmRJPcLR1DXegKXbRuu45pA7FqZ1Tk-w6ObSK3aiaG5eufhiQ_zqcdewHKCW2Rp7HFIzrx6abx57Cq9_CU6GfA2Em44Dw4RkrDOkOgYqeKcyO1aGBI0dgypXsct2gJnOrniJgaAfmOEVAZ2hJjr6ip2iIS-Nye3-Goh_T0n-Z32_F-qP4NBlF_wyhzn1q5ukkqs01xVeTRN4p9N7p1BovmyqyNIyzNgSdAIOgcb7GXhu0BGOngttTAj4_V8rzRZ_XeS6LPGg10b88tZZRUspByB7dfRUzC_COCaCCcbQA",
    kinopoisk: "https://www.kinopoisk.ru/film/4860213/",
  },
  {
    id: 6,
    name: "Субстанция",
    url: "https://kinopoisk-ru.clstorage.net/1y5H5q171/45f9175M/cuPMC9KmYnnBNgq_C73gg02tDb1vCe5Mb8iahNwv0H25l8UCc-nXECsybFyDdw4wA8CbWhZIEbd-gufd7qmf_ceSnErC0gY4dMMO7x9I9WKIaYxefKq4rjxrLXa_HAZp7aOEd7ZMIxQL1_hpMpMqdmWxz26h62Ww2hYhWo7cuzmwcM-bMgfgbXMGaVn7b9DR7Uy7LN7bu59Mykznvw22Og5gE7X3TZNGSIYZevUjqFTX1PzN0SnnkijW8gpM_5saUpI8qtCHAF2DlIkYaQ5QwV6Oad1fGymcr9peNw1Otjq-E9LV9r5TBAuXW6vH43q11ySdLdB5dSIJRIIZry-4CgGh3vnB1ZBd0fQJqZtNAhI_vckPbPk5vx_IjzZdTFY6zECiRYSes_Y6hfl6tTIZVYZ07MyRCrTSmTXSG4xsGonx0PzaEefxf9C0C2toXNNQnz8Zry96KmwveL6Ub67UKA5Bk7fnz8EkibbrafSzOFY0hR9vcnqHMFn2kcqdj8rawEC9WwE1wmyBNguamy2g4Ax_6h0vOZuejMlM540_9SuN4lHUVF5TpCnnSUi0QkvFh9T8P9GJRkJ65eIqjAzomLJyPlrht7Pv05abytocwBH-v6jfz5qI_j243xadrhUJHCOA9IVO0JYbpbgJNpKb5cUV_j4x6LTxS6XA6o5-KKoyYP06AjQTrqE3ecqojJITzN6r350ayM-921zUPM_UCD1xs9Zm_UDkWiQa2NVwSkb1B3__Ixhk8An00LreDnjb0fH9ePDEQb3zVGn7uX0CIh--CT7tycucnhmvRl-sp8itwVGXF19DhSpmS_rEYStE5nZsznGK1xBbpZD7z-zp2cJgHNvw5sMMAzdpmRjdYXG9LvkNnnjZHy2rzKauTcWYPIISp9QvgoZL5ktp52OoZLSWXN5hmHbDO9SBSQwfyhoCQE2bAFej_CDEmgjY_FKRXW4ITx_puc286XynDaymOH9D4uenTbClarTrmeRiKhY0hz7PE0vGYtrE4PgvLHqo85AMeBP1kNwzNDiZmt1AkU7sKYz_Ors_LLhexJ4sRmhMIYC3pX4jtTgGaDm0ApnVRudt72HZFTPapxM63J776DLi7vsyZ6HtUWQ7e8h-0nGtDttvvMrp7jwK3KcsL9ZKXaBi12Tu8OdKNxt6pLObFBd03u4yycfAWfYyyLzsmAsicMxoEBdzHeCEWflIbNLTPJ_aL_0rK46c6HwXbw2mOB2x4IYE_1F1qlTpeBajiQWG5f88Y5gnotglYCr8nivJIiHeOIPkIj2B1Avpym-jYhz8O_wc2Zms70muBG_9l6h9UWM2Nf5gRculSAn2ILnEBBSc7jGad7Fpp1E6L54KWLJi30uihCPfoWT5ufrcYRNun-mN7fmrnn0JDPZ_PYa6bbDhpTQ-IbcZV6h51OGIR9QFPB1RyXbDGUQh-t_f6cvzky4r0DZxzkLGKuhID3FjPRyp_30K-h0ume7Uf-2lijwCY_V0DKEXiobJuSTwywbVNx1sodoEosqWwXgs3Ej601K9eqPW4T3BJAr7yQyyES7d2nztanpPToq-JO0sZ6pfwIEEd71R9zvFGUolY6g3VJeMrrNIFeKLpPI5zd15-eIxDLrQB4HdcSU52OhNoJP_PMn832q6Tt66_0RfntQ6v4HTtTe8QnZLhgp4pIBrpgTnTt9Ce1fDyPUByd4uqHnhsS4qouVxDBEGmVjoHwERrtz5n04bqd1t-n60PH0WSO_C0xZE7AEFu5e6adUg2BeHZw0vAZq28imFwAsOPBipgCDumvJ3U2-jVlqYuw7Qs82-aC0f6LquD9qf1t3dp7o_43BVZd9ghkvFWyul8HpFJhUuLEI7VBDLRXI6P5zoieGiTJrQVyF9k8TKqbl9k1GtzhvcLEnYr39ZT9U-_be4zKAS5YYskoZ5lGsYpQLJdLTmTxwwGRTjSXWiS_7cOYnzkc8JwseQLBFm6SpKbFCTLww4L9-6em7_-O_FfT_WuE2AENZEjHNkWhdZGofwm_TGF50uE3lVsIqnQviP3uvak1BM2bKWA-0TR2k5-u0TU2-uqg-cC7u9Pvu8B02t5hpsUAG1x_zQlgm0KljFQwmmNzaeTVBKpON5NOHZPf9b-dKDDbkS5VPts2XquqmvgEJtLJs9Txp57r76jcRcXma7DsID9TT8IzQJhGsK9VMbFjc0rV-zWMUz6rUgG6w-yhhAkiy6gdeRHqE32duYPWKiHb5r_v_6OGzdaVxkfi8EyFyAkkYl30BESqeKa6cgylXm14wekwkngguGEUm8PMgr8rDMWRLHcAwC9NjayO0zIi7v231t6HkdTKrcFGw9BwnOkaIFtE_ht1s3yivkQpllRgRPLJA6lzHpBLM6Tmw4OYLjvCvwlAPPowaJe1g8wJO-rLhs_cg6T40qvzT9L-fpDPKiJ-TMQcdbFCmbxFBJ5OaXvl-jqpSQOCbw6r7eG5pQgv44YYZzfVMkCUppPPDxz-zqXg1Jmt6M2x7G3b8Hic7C4HeEzoDkalQb-LTQKgdWVe__wjplM1l2ktrODfqJEqDceDLF8yxhJcuYyl7xw6-fmZ7-K9v-Lylu96_dtMnusAIVtk9hxHmX-sqHMuu1Z0WNb2I4xFLpRhC73D6a6DGB7PpTxyGeESSbCUrtwVA-vHmcLkiL_yybnRT9DxZp_DDApDbsQ9WIp8s55rMbFVaXrT_T2RRCqNdBCS_8SCkTww5KMFVQf7DF65iKvWCxXJ-ZTp2Jma996S4VHE_Xqb2SwOQWnYCHu2V6WgazOeT2Z2xOMDr3MDgV8IguTKvJ4kL-WLDGA_1QpGlIuv3QUF0tCj-caopODrkvNh-8Vkq-MlCGR4xT1ys3iji2YukVhqW-D2OoJHDLdPMbDqxqKhCxjGgR1cF94rYZyqqf4yFfz_lvP3v6_F-572d_DLb4HYCAx2TNwbX6dwtpxANpdxbXfw9RKcQyeTaSQ",
    kinopoisk: "https://www.kinopoisk.ru/film/4860213/",
  },
  {
    id: 7,
    name: "Очень странные дела",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWObQsK3mxh1hKC9HVRhjQSy7q7UIlezoZQ&s",
    kinopoisk: "https://www.kinopoisk.ru/series/915196/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 mt-6">
          🎬 Выбери фильм для просмотра
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((item) => (
            <div key={item.id} className="group">
              <a
                href={item.kinopoisk}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 text-center leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>💡 Нажми на постер, чтобы перейти на Кинопоиск</p>
        </div>
      </div>
    </div>
  );
}
