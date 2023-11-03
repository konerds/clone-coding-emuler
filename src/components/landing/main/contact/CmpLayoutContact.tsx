import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import Modal from 'react-modal';
import CmpElWrapperInput from './CmpElForm';
import PageConfirmation from '../../modal/CmpModalConfirmation';
import { TObjStateMsgSubmit } from '../../../../interface';

const SectionWrapper = tw.section`
relative bg-[color:#0a0a0a] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[1360px]
`;

const DivWrapperIntroduce = tw.div`
relative mb-[40px] flex w-full flex-col items-center
`;

const H2TitleIntroduce = tw.h2`
mb-[24px] text-center text-white max-desktop:text-[56px] max-desktop:leading-[64px] max-tablet:mb-[16px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const DivWrapperDescIntroduce = tw.div`
mx-auto flex max-w-[560px] flex-col items-center justify-center text-center
`;

const ParagraphDescIntroduce = tw.p`
text-[20px] -tracking-[0.4px] text-white max-desktop:text-[18px]
`;

const DivWrapperForm = tw.div`
mx-auto max-w-[720px]
`;

const DivBlockForm = tw.div`
mx-0 mb-[15px] mt-0
`;

const FormConfirmation = tw.form`
flex flex-col items-center
`;

const DivDividerForm = tw.div`
mb-[56px] mt-[32px] h-[1px] w-full bg-[color:#ffffff26] max-tablet:mb-[48px] max-tablet:mt-[24px]
`;

const H4TitleSectionForm = tw.h4`
mb-[56px] text-center text-white max-tablet:mb-[48px] max-tablet:text-[24px] max-tablet:leading-[32px]
`;

const DivLayoutGridSectionForm = tw.div`
grid w-full gap-x-[24px] gap-y-[16px] [grid-auto-columns:1fr] [grid-template-columns:1fr_1fr] [grid-template-rows:auto] max-tablet:gap-y-0 max-tablet:[grid-template-columns:1fr]
`;

type TPropsDivWrapperInput = {
  $className?: string;
};
const DivWrapperInput = tw.div<TPropsDivWrapperInput>`
mb-[12px]
${(p) => p.$className || ''}
`;

const ButtonSubmitForm = tw.button`
inline-block rounded-[8px] border-[2px] border-white bg-white px-[32px] py-[12px] text-[14px] text-black [text-decoration:none] hover:bg-white disabled:cursor-not-allowed
`;

const DivWrapperSuccess = tw.div`
mt-[10px] rounded-[16px] bg-[color:#ffffff26] p-[24px] text-center
`;

const DivTextSuccess = tw.div`
text-left text-[16px] leading-[24px] text-white
`;

const DivWrapperFailure = tw.div`
mt-[10px] rounded-[8px] bg-[color:#ffdede] p-[10px] text-[#e01e1e]
`;

const DivTextFailure = tw.div`
`;

type TPropsCmpLayoutContact = {
  refSectionWrapper: React.RefObject<HTMLElement>;
};

const CmpLayoutContact: FC<TPropsCmpLayoutContact> = ({
  refSectionWrapper,
}) => {
  const [stateMsgSubmit, setStateMsgSubmit] = useState<TObjStateMsgSubmit>({
    type: 'none',
  });
  const [nameEntered, setNameEntered] = useState('');
  const [emailEntered, setEmailEntered] = useState('');
  const [locationEntered, setLocationEntered] = useState('');
  const [companyEntered, setCompanyEntered] = useState('');
  const [linkToDesginEntered, setLinkToDesignEntered] = useState('');
  const [detailsProjectEntered, setDetailsProjectEntered] = useState('');
  const handlerSubmitConfirmation = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    try {
      if (
        !(
          !!nameEntered &&
          !!emailEntered &&
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
            emailEntered,
          ) &&
          !!locationEntered &&
          companyEntered
        )
      ) {
        throw new Error('Input Error');
      }

      console.log(nameEntered);
      console.log(emailEntered);
      console.log(locationEntered);
      console.log(companyEntered);
      console.log(linkToDesginEntered);
      console.log(detailsProjectEntered);

      setStateMsgSubmit({
        type: 'success',
      });
    } catch (e) {
      setStateMsgSubmit({
        type: 'failure',
        msg: `Oops! Something went wrong while submitting the form.`,
      });
      setTimeout(() => {
        setStateMsgSubmit({ type: 'none' });
      }, 2000);
    }
  };
  const handlerOnRequestCloseModal = () => {
    setStateMsgSubmit({
      type: 'success',
      msg: `Thank you! Your message has been received. We'll be in touch.`,
    });
    setTimeout(() => {
      setStateMsgSubmit({ type: 'none' });
    }, 2000);
  };
  return (
    <SectionWrapper id="Get-Started" ref={refSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2TitleIntroduce>Get started</H2TitleIntroduce>
          <DivWrapperDescIntroduce>
            <ParagraphDescIntroduce>
              It only takes a few minutes to kick off a project. Fill in the
              details below and we’ll be in touch.
            </ParagraphDescIntroduce>
          </DivWrapperDescIntroduce>
        </DivWrapperIntroduce>
        <DivWrapperForm>
          <DivBlockForm>
            <FormConfirmation onSubmit={handlerSubmitConfirmation}>
              <DivDividerForm></DivDividerForm>
              <H4TitleSectionForm>
                First, tell us about yourself
                <br />
              </H4TitleSectionForm>
              <DivLayoutGridSectionForm>
                <DivWrapperInput>
                  <CmpElWrapperInput
                    textLabel="your name*"
                    base={{ element: 'input', type: 'text' }}
                    nameInput="name"
                    required={true}
                    value={nameEntered}
                    setValue={setNameEntered}
                  />
                </DivWrapperInput>
                <DivWrapperInput>
                  <CmpElWrapperInput
                    textLabel="Email*"
                    base={{ element: 'input', type: 'email' }}
                    nameInput="Email"
                    required={true}
                    value={emailEntered}
                    setValue={setEmailEntered}
                  />
                </DivWrapperInput>
              </DivLayoutGridSectionForm>
              <DivLayoutGridSectionForm>
                <DivWrapperInput>
                  <CmpElWrapperInput
                    textLabel="location*"
                    base={{
                      element: 'input',
                      type: 'text',
                    }}
                    nameInput="Location"
                    placeholder="City, Country"
                    required={true}
                    value={locationEntered}
                    setValue={setLocationEntered}
                  />
                </DivWrapperInput>
                <DivWrapperInput>
                  <CmpElWrapperInput
                    textLabel="company*"
                    base={{ element: 'input', type: 'text' }}
                    nameInput="Company"
                    required={true}
                    value={companyEntered}
                    setValue={setCompanyEntered}
                  />
                </DivWrapperInput>
              </DivLayoutGridSectionForm>
              <DivDividerForm></DivDividerForm>
              <H4TitleSectionForm>
                Lastly, tell us about the project
                <br />
              </H4TitleSectionForm>
              <DivLayoutGridSectionForm>
                <DivWrapperInput $className="w-full">
                  <CmpElWrapperInput
                    textLabel="link to design"
                    base={{
                      element: 'input',
                      type: 'text',
                    }}
                    nameInput="Website-URL"
                    placeholder="Share a link to your design (Figma, Sketch, Invision, Zeplin, etc.)"
                    value={linkToDesginEntered}
                    setValue={setLinkToDesignEntered}
                  />
                </DivWrapperInput>
              </DivLayoutGridSectionForm>
              <CmpElWrapperInput
                textLabel="project details"
                base={{
                  element: 'textarea',
                }}
                nameInput="Project-Details"
                placeholder="Anything else you'd like to add?"
                value={detailsProjectEntered}
                setValue={setDetailsProjectEntered}
              />
              <ButtonSubmitForm disabled={stateMsgSubmit.type === 'success'}>
                Submit
              </ButtonSubmitForm>
            </FormConfirmation>
            {stateMsgSubmit.type === 'success' && (
              <>
                {!!stateMsgSubmit.msg ? (
                  <DivWrapperSuccess>
                    <DivTextSuccess>{stateMsgSubmit.msg}</DivTextSuccess>
                  </DivWrapperSuccess>
                ) : (
                  <Modal
                    style={{
                      overlay: {
                        zIndex: '1010',
                      },
                      content: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 0,
                        width: '100vw',
                        height: '100vh',
                        border: 'none',
                      },
                    }}
                    isOpen={true}
                    onRequestClose={handlerOnRequestCloseModal}
                  >
                    <PageConfirmation
                      handlerOnRequestCloseModal={handlerOnRequestCloseModal}
                    />
                  </Modal>
                )}
              </>
            )}
            {stateMsgSubmit.type === 'failure' && !!stateMsgSubmit.msg && (
              <DivWrapperFailure>
                <DivTextFailure>{stateMsgSubmit.msg}</DivTextFailure>
              </DivWrapperFailure>
            )}
          </DivBlockForm>
        </DivWrapperForm>
      </DivContainer>
    </SectionWrapper>
  );
};

export default CmpLayoutContact;
