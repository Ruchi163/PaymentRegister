namespace PaymentAPI.Controllers
{
    [Route('api/[controller]')]
    [ApiController]
    public class PaymentDetailController:ControllerBase{
        readonly private PaymentDetailContext _context;
        PaymentDetailController(PaymentDetailContext context){
            _context=context;
        }

        [HttpGet]
        public async Task<IActionResult<IEnumerable<PaymentDetail>>> GetPaymentDetails(){
            return await _context.PaymetDetails.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task<IActionResult<PaymentDetail>> GetPaymentDetail(int id){
            var paymentdetail= await _context.PaymentDetail.FindAsync(id);
            return paymentdetail;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentDetail(int id,PaymentDetail paymentdetail){
            _context.Entry(paymentdetail).State=EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
    }

    [HttpPost("{id}")]

    public async Task<IActionResult<PaymentDetail>> PostPaymentdetail(PaymentDetailController paymentdetail){
        _context.PaymentDetails.Add(paymentdetail);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPaymentDetails",new {id=new PaymentDetail.paymentdetailId},paymentdetail)
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePaymentDetail(int id){
      var paymentdetail=_context.PaymentDetails.FindAsync(id);

      _context.PaymentDetail.Remove(paymentdetail);
      await _context.SaveChangesAsync();
      return NoContext();
    }


}