import { useState } from "react"

export default function MailchimpForm() {
  const [emailField,setEmailField] = useState('')

  {/* <form action="" className="bg-zinc-200 rounded-lg p-2 flex gap-2 mt-8 md:mt-24">
              <input type="text" placeholder="Digite seu melhor e-mail" className="h-12 rounded-md w-full pl-2" />
              <button className="rounded-md bg-brandPink text-zinc-100 w-56 font-bold px-4 whitespace-nowrap">Quero conhecer</button>

            </form> */}

  return (
    <div id="mc_embed_shell" className="flex w-full">
      <div id="mc_embed_signup" className="flex w-full">
          <form action="https://agency.us8.list-manage.com/subscribe/post?u=00261c82641f3a1198db831a5&amp;id=67ce75cc94&amp;f_id=00991be3f0"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="w-full flex justify-center items-center" target="_blank">
              <div id="mc_embed_signup_scroll" className="bg-zinc-200 rounded-lg p-2 flex gap-2 mt-8 md:mt-24 w-1/2">
                <div className="mc-field-group w-full">
                  <input type="email" name="EMAIL" placeholder="Digite seu melhor e-mail" className="required email h-12 rounded-md w-full pl-2" id="mce-EMAIL" required={true} value={emailField} onChange={e => setEmailField(e.target.value)} />
                </div>
                <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                    /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                    <input type="text" name="b_00261c82641f3a1198db831a5_67ce75cc94" value="" />
                </div>
                <div className="optionalParent">
                    <div className="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button rounded-md bg-brandPink h-12 text-zinc-100 w-56 font-bold px-4 whitespace-nowrap" value="Quero conhecer" />
                        {/* <p style={{margin: '0px auto'}}>
                          <a href="http://eepurl.com/iRmSnM" title="Mailchimp - marketing por e-mail fácil e divertido">
                          <span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
                            <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;" />
                          </span>
                          </a>
                          </p> */}
                    </div>
                </div>
          </div>
      </form>
      </div>
      </div>

  )
}
