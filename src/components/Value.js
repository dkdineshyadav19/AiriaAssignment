import React from "react";

export default function Value() {
  return (
    <div className="container">
      <div id="our-values" className="join-innovation tw-mt-10 md:tw-mt-10">
        <div className="join-innovation--container">
          <div className="join-innovation--text1">
            Join us on a journey of Innovation
          </div>
          <div className="join-innovation--text2 tw-mb-8">
            We're developing technology to simplify the rapidly evolving tech
            landscape, making it accessible to everyone at affordable prices.
            While invention sparks revolution, true transformation comes through
            widespread adoption. We empower users to harness cutting-edge
            technology without the hassle of extensive research and learning.
          </div>
          <div className="md:tw-flex tw-justify-between tw-items-center">
            <div className="md:tw-mb-0 tw-mb-4">
              <div className="tw-w-[54px] tw-mx-auto md:tw-mx-0 tw-h-[54px] tw-mb-2">
                <img
                  src="data:image/png;base64,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"
                  alt="our-vision"
                  className="tw-w-full tw-h-full"
                />
              </div>
              <div className="join-innovation--text3 tw-mb-2">Our Vision</div>
              <div className="join-innovation--text2 tw-mx-auto md:tw-mx-0  tw-w-60">
                To simplify technology and make it usable and accessible to
                everyone in the world
              </div>
            </div>
            <div className="md:tw-mb-0 tw-mb-4">
              <div className="tw-w-[54px] tw-h-[54px] tw-mx-auto md:tw-mx-0 tw-mb-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAToSURBVHgB7ZrPixxFFMe/1dOz07Oz2SEzZs3GHXMSEs9CQLwsrgc9qcgSRNaLuKAoKAgaFMeDqAgKQYTkILiIhwhGD4po/AMULx6MnpRl3VUTJmYn8zM93ZX3JrObyfSv6e7qTQfmA73bU9VdVa/fq+r3XjUwYcKEJBFIiGpVaqUasqUScpbAE1R0N5drGs7LPL4xtmCfL6JbrQobCaBUsDMvyXzDwEwmhzz9NHbKNWCN/h3jcynxpRR4bei2jtVFe6aDxvKHog1F6IgJa+aeDorIYLadRS6D0Bj0IIx2DvvXXpemlkHtqbdEHTGJJdja+7KAbcz1DGShAKkjawEHScByXAEjCXbqWZktzONOq4np+Dp3siPg5ydkfn4KtcWq6CEkGkLy7UmZy89hgRaEaSSMOYXiRg+Vk9QnQhJKsK/fk/tql1DhJ4o9gvsqXsJh7jvMfWMLxg1fbmPejqBlWno3ERPuO4xwYw2SzY8bRkQsG2sS+IMk/D0j8REi8v9VzI1rloHvMV4oeE7tpfn5QcuIWdGxEbSgBGpsqohyWoRieCybEgeDrvMV7LM35axWwCxSBq/I/XeoD76C2RbKSCvkGLDX41XtWcHaSpMJjsJjOwxva/IULNXaGmCZ5KN64CrYmQ9kPs3a2iFLTjdHFG517hq7iBkohmbDPj6gGA6T3MpdBTM1tX6gJvBgxsYvfPA5FGIX3MfqEEzSStMjFUMhFFw+vntuYwkKyfaQc1sdHQVfzKoViiH3RrkJDkPpB8d64DTFOiIEwbcWyq04lOEIE7vAcZL2GY826raNd+hx+Hrr/Xkk8RgG7xlygO/ddUoFjg1yIP326PdZW+JHv/Zg46gQWKHjLtd6gdP095PhIt3ZBha0QeLFtQ2NHGLgUc96Fkbi45Gy4XMe3I0BSjyka7ivZ+OKZ5sC79JxxKueou3vRsuixFZ7T4ROHRqjJ/MbmcZZzxtsfGr7PA7SZp2qn6enuDQ0rqWhBWSTrOLnnToy2x/8tMVkBJ7rSbzgeQHFeaNFDsHaLXxv5PErPOiNoWMS6hyuH4N+b8or/oShvCI9xEBIKJ7Tr3rVNyS2Rsscw6y00MFthr4FRzbZIdjDZZhQDCnlChLkn0NOZTgEE5RL101e9dVBnezOWVpVz0Ehpu6e/3dNd2ZttCihoMwD4TnHSzqfBy0UYdGaaLmWu159AA0ohgVSLRRj1tB0K3cVbPll0VZtjkkgMjBXT4sQGmMsxN7xSBqth5pnnVfFkwa2+YkgpfDY/HZjPAXj1dGwKJZOKX7a6tf7VS5XRYNS0i2kDMp1bAftnQU6SM1D+C9NJsljmb/fX1tMoGCrq8K8o4gtDYi+CU5xFN3/1eA4ghjwWBYXgzcCxwpbHnlRdIXEBUSE7j1B/47yQU7w04gITYt/eSzjXDt2PMY2zQ0jAnFzHmwt3HeYPelQgSY3fKCE9b2cc9xXuYSNsBvtoSNoNoX2HP62kfwLnFLY7coD2BjX/IaJFenzxoWt0/6Z5Z8OD/iAxTkotggDF1ZeEU1EJLTGhmHzWHlD/MX2r8I8TfJP9Q4u/mlhPY5QjJKvNAb2Xz9VldPZLgo5SpGPm01mZ7tLYZKZQ3P1baHMGUj0IzHajTf2k1V0NRynfORCv0NKFnFeZSqP7jpwNamPxCZMmJAs1wB82p20/eQvmQAAAABJRU5ErkJggg=="
                  alt="our-mission"
                  className="tw-w-full tw-h-full"
                />
              </div>
              <div className="join-innovation--text3 tw-mb-2">Our Mission</div>
              <div className="join-innovation--text2 tw-mx-auto md:tw-mx-0  tw-w-60">
                To help users build, grow and scale adopting latest technology
                with ease and affordability
              </div>
            </div>
            <div className="md:tw-mb-0 tw-mb-4">
              <div className="tw-w-[54px] tw-h-[54px] tw-mx-auto md:tw-mx-0 tw-mb-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMiSURBVHgB7Zq/ctpAEIf3MM5QUlJSuiSdS/IGThcm/5/A5gksniDOE4Qkk0lL6S6U7kLpkpIulEowXH5rCQc7SDpp97A9c98MIzzIkj7pbm/vVkSBQMAnhhT5FNnunqWONdTEgadLovH7yEwz9m3uER1ZoraxNF+a630npISKGC6yXccGX7t3f8OFDyE4WAvm7QtGV0T9rJtRBrFYeud/4kDtnN3m1tKgVqNf2J7h72bWjjZ50k8hNycBNRLyxNBxgRTTNIY+QGpIOVIMHwsXdUJCxGJLS+9IGVzUMQkRiaEZdhyeVhWa3BdJgEisXtCshLRJgEgMEUzUwX0i7WNT8iM3R1QckwCRWBqSP5Iy6LcjEiKOimiOPC6pPTXOWDAuDkiIWIyfGgbVPimxglRPIfMQizFvIjMkhbvMUumxxKgmwV8jG2FzShVgqbeRiUgJVTGmipy2FKMuxnw5tSecG7rsiylL/9XAnJEyXsSY70iJkKX/sBkZBEc/fJ6/VJyDbaISPLbBkQ1h+xm+ft7y82iBqYkvKcbbE9vkG5JljHdHPFNGE528FmYVgUAgEAgEAg8LLykVL3tj00g/TEzJAk1MO0KzKHGATL6FrLpl/wndwia54hR540Sj8JBHZbG1DA7QyRLJwyalo6FL8YHLU/soT/H3laEY06GLopJTaTEWwnSkq7G0jWPEmL6w3CzjXNc1tG3nukrkznOO7Yam0CZcNtq2gMPn2yd6kdcaeOkv64nXyQFuCvXthToxNfv/+v/6fLbgfxtJ7aC62H5SfvUCgsnNheU1vbtwH+0NsgOQkxjXlMkTf9BXIMTN7RBN79A1EHHNOu93JzFfQOIyjaxcZG8UNb0NJkVR8V7FIHTA2xJC62FiXLSft1UqH/Dw4Dr2PRqxjTHPqbJzr03RFdz9KYLMqMwrEk5ivB7oMzJmnjd5SudV3thxElugs2Is6+5KjoUQUC4WSdpUaUZQathNx5tb40w6+vP7Hi0WT7P7VpnEmEXwmaHqMsOdvuw9hFeOsuCb0EgFV0ibIH0jiqYdI+Ngmfg3ZKSvFwUCgd3zF6xIHxqCPjq+AAAAAElFTkSuQmCC"
                  alt="our-value"
                  className="tw-w-full tw-h-full"
                />
              </div>
              <div className="join-innovation--text3 tw-mb-2">Our Values</div>
              <div className="join-innovation--text2 tw-mx-auto md:tw-mx-0  tw-w-60">
                We're obsessed with ownership for customer delight, integrity
                and agility
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-airia">
        <div className="bottom-banner">
          <div className="md:tw-flex tw-items-center tw-justify-between">
            <div className="md:tw-w-[60%]">
              <div className="btx">
                Try the AI search that is beyond the keywords
              </div>
              <div className="gt">
                Tailored to handhold the customers throughout the journey
              </div>
            </div>
            <div className="md:tw-block  tw-flex tw-justify-center tw-items-center">
              <button className="req-btn">Request Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
