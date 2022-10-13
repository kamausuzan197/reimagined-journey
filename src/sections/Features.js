import './Features.css'

const Features = () => {
  return(
      <div className='feature'>
            <div className='feature__container'>
                <div className='feature__container__left'>
                    <img src='https://previews.123rf.com/images/dit26978/dit269781803/dit26978180300029/98385071-3d-rendering-washing-machine-in-vintage-laundry-room.jpg' alt='laundry' />
                </div>
                <div className='feature__container__right'>
                    <h1>CLOTHES VARIETY.</h1>
                    <p>
                        General clothes cleaning:
                        <small>
                            These are items such as jeans, trousers,
                            shorts, dresses, skirts, shirts, blouses, T-shirts, gym kits, pajamas, towels,
                            sweaters, jackets and more.
                        </small>
                    </p>
                    <p>
                        Cleaning of beddings: :
                        <small>
                            This includes duvets, bed sheets, blankets
                            pillow cases, and mosquito nets.
                        </small>
                    </p>
                    <p>
                        Cleaning household textiles :
                        <small>
                            This covers items such as
                            curtains, drapers, seat covers, and table cloths.
                        </small>
                    </p>

                </div>
            </div>
      </div>
  )
}
export default Features