export const templateNames: { [key: string]: string } = {
  user: `유저`,
  shop: `쇼핑몰`,
  introduce: `자기소개`,
  resume: `이력서`,
  pricing: `결제`,
};

export const exampleCode = `const myObj = {
    name : {
        firstName: $firstName,
        lastName: $lastName,
        fullName: $fullName,
        nameWithGender: $nameWithGender
    },
    profile: {
        age: $age,
        birthday: $date,
        height: $height,
        gender: $gender,
        mbti: $mbti,
        homePage: $link,
        preference: {
            habit: $habit,
            smoking: $smoking,
            drinking: $drinking
        },
    },
    contact: {
        email: $email,
        mobileCarrier: $mobileCarrier,
        phoneNumber: $phoneNumber,
        socialMedia: $socialMedia,
    },
    address: {
        address:$address,
        postalCode: $postalCode,
    },
    career: {
        education: $education,
        university: $university,
        company: $company,
        occupation: $occupation
    },
    payment : {
        price: $price,
        bank: $bank,
        accountNumber: $accountNumber,
        creditCardCompany: $creditCardCompany,
        creditCardNumber: $creditCardNumber,
    },
    options: {
        ip: $ip,
        uuid: $uuid,
        station: $station,
        color: $color,
        number: $number,
    },
    culture: {
        drama: $drama,
        movie: $movie,
        music: $music,
        artist: $artist,
        food: $food,
    },
};
`;
