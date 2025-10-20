import Image from 'next/image';

export default function Studio() {
  return (
    <>
      {/* Studio */}
      <div className="container studio">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 wow fadeInDown">
            <p>
              Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.
            </p>
            <p>
              Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.
              <br /><br />
              Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together. Nor off for enjoyed cousins herself. Little our played lively she adieus far sussex. Do theirs others merely at temper it nearer.
              Smiling nothing affixed he carried it clothes calling he no. Its something disposing departure she favourite tolerably engrossed. Truth short folly court why she their balls. Excellence put unaffected reasonable mrs introduced conviction she. Nay particular delightful but unpleasant for uncommonly who.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Image 
              className="img-fluid" 
              src="/img/photo-2.jpg" 
              alt="Photo" 
              width={400}
              height={300}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Image 
              className="img-fluid" 
              src="/img/photo-3.jpg" 
              alt="Photo" 
              width={400}
              height={300}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Image 
              className="img-fluid" 
              src="/img/photo-4.jpg" 
              alt="Photo" 
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}

