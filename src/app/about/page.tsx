import Image from 'next/image';

export default function About() {
  return (
    <div className="Container">
      <div className="Content">
        <div className="Wrapper">
          <div className="LeftContent col-xl-6 col-sm-12 split-image-left background-2">
          </div>
          <div className="RightContent col-xl-6 col-sm-12 split-image-right">
            <div className="row justify-content-center">
              <div className="col-9">
                <div className="row">
                  <div>
                    <p>
                      Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.
                      <br /><br />
                      Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together. Nor off for enjoyed cousins herself. Little our played lively she adieus far sussex. Do theirs others merely at temper it nearer.
                      Smiling nothing affixed he carried it clothes calling he no. Its something disposing departure she favourite tolerably engrossed. Truth short folly court why she their balls. Excellence put unaffected reasonable mrs introduced conviction she. Nay particular delightful but unpleasant for uncommonly who.
                    </p>
                    <Image 
                      className="img-fluid pt-5 pb-5" 
                      src="/img/photo-1.jpg" 
                      alt="Photo" 
                      width={600}
                      height={400}
                    />
                    <p>
                      Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.
                      <br /><br />
                      Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together. Nor off for enjoyed cousins herself. Little our played lively she adieus far sussex. Do theirs others merely at temper it nearer.
                      Smiling nothing affixed he carried it clothes calling he no. Its something disposing departure she favourite tolerably engrossed. Truth short folly court why she their balls. Excellence put unaffected reasonable mrs introduced conviction she. Nay particular delightful but unpleasant for uncommonly who.
                    </p>
                    <Image 
                      className="signature float-right" 
                      src="/img/signature.png" 
                      alt="Signature" 
                      width={150}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

